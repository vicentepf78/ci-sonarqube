const calculadora = require('./calculadora')

test('Aplicar soma em A + B', () => {
    const result = calculadora.somar(10,10);
    expect(result).toEqual(20); 
})

test('Aplicar subtração em A - B', () => {
    const result = calculadora.subtrair(20,10);
    expect(result).toEqual(10);
})

test('Aplicar multiplicacao em A * B', () => {
    const result = calculadora.multiplicar(10,2);
    expect(result).toBe(20);
})