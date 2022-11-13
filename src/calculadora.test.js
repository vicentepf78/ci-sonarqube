const calculadora = require('./calculadora')

test('Aplicar soma em A + B', () => {
    const result = calculadora.somar(10,10);
    expect(result).toEqual(20); 
})

test('Aplicar subtração em A - B', () => {
    const result = calculadora.subtrair(20,10);
    expect(result).toEqual(50);
})