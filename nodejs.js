// creare un modulo de matematicas
const math = {}; //forma (B)

function add(x1, x2) {
	return x1 + x2;
}
function substract(x1, x2) {
	return x1 - x2;
}
function multiply(x1, x2) {
	return x1 * x2;
}
function divide(x1, x2) {
	if (x1 === 0) {
		console.log('El CERO NO es divisible');
	} else {
		return x1 / x2;
	}
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;
// esta es una forma (B) de crear mi objeto y exportarlo
module.exports = math;
// este module.export no solo puede exportar un objeto sino tambien una funcnion
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
// esta es una forma (A) de exportar una propiedad de un objeto
