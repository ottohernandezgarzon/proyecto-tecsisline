const test = require("node:test"),
  assert = require("node:assert/strict");

function sumar(a, b) {
  return a + b;
}

test("Sumando", () => {
  const resultado = sumar(2, 3);
  const esperado = 5;
  assert.equal(resultado, esperado);
});
