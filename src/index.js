
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (typeof matrix === 'undefined') {
		return [];
	}
	let sortedMatrix = [];
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2) {
			for (let j = matrix[i].length - 1; j >= 0; j--) {
			    sortedMatrix.push(matrix[i][j]);
		    }
		} else {
		    for (let j = 0; j <= matrix[i].length - 1; j++) {
			    sortedMatrix.push(matrix[i][j]);
		    }
		}
	}
	return sortedMatrix;
}
