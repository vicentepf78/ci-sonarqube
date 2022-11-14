function main() {
    const result = somar(10,10);    
    console.log("Vicente : " + result);
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

module.exports = {somar, subtrair, multiplicar, dividir}

if (require.main === module) {
    main();
  }
