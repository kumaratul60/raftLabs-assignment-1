function chessboard() {
    var xpos = document.getElementById("valforx").value;
    var ypos = document.getElementById("valfory").value;
    console.log("Heyyy");

    if (xpos == "" || ypos == "") alert("Please provide Both Values!");
    else {
        let n = 8;
        let m = 8;

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        console.log(typeof xpos);
        let mat = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        mat[xpos][ypos] = 1;
        function findPossibleMoves(mat, p, q) {
            // All possible moves of a knight
            let X = [2, 1, -1, -2, -2, -1, 1, 2];
            let Y = [1, 2, 2, 1, -1, -2, -2, -1];

            let count = 0;

            // Check if each possible move is valid or not
            for (let i = 0; i < 8; i++) {
                // Position of knight after move
                let x = p + X[i];
                let y = q + Y[i];

                // count valid moves

                if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0) {
                    mat[x][y] = 1;
                    count++;
                }
            }

            // Return number of possible move
        }

        let p = xpos,
            q = ypos;
        findPossibleMoves(mat, p, q);
        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < mat[i].length; j++) {
                document.write(" " + mat[i][j] + " ");
            }
            document.write("<br>");
        }
        document.write("<br>");

        document.write(
            "1 represents cells that can be visited by Knight and 0 are inaccessible cells"
        );
    }
}
