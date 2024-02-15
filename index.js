function canPlaceQueen(board, row, col, N) {
    // Проверяем горизонталь и вертикаль
    for (let i = 0; i < N; i++) {
        if (board[row][i] || board[i][col]) return false;
    }

    // Проверяем диагонали
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i + j === row + col || i - j === row - col) {
                if (board[i][j]) return false;
            }
        }
    }

    return true;
}

function solveNQueens(N) {
    const board = Array.from({ length: N }, () => Array(N).fill(false));

    function solve(row) {
        if (row === N) {
            return board; // Расстановка завершена
        }

        for (let col = 0; col < N; col++) {
            if (canPlaceQueen(board, row, col, N)) {
                board[row][col] = true; // Поставить ферзя
                const result = solve(row + 1);
                if (result) return result;
                board[row][col] = false; // Если не получилось, снимаем ферзя
            }
        }

        return null; // Не удалось разместить ферзя на этом уровне
    }

    return solve(0);
}

// Пример использования
const N = 8;
const solution = solveNQueens(N);
if (solution) {
    console.log("Решение найдено:");
    for (let row = 0; row < N; row++) {
        console.log(solution[row].map(cell => cell ? "Q" : ".").join(" "));
    }
} else {
    console.log("Решение не найдено");
}
