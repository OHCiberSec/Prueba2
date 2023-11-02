function calcular() {
    const nombre=document.getElementById("nombre").value;
    const renta=parseFloat(document.getElementById)("renta").value;
    const Tingreso=document.getElementById("Tingreso").value;

    let resultado;
    
    if (Tingreso == "honorario") {
        resultado = renta - (0.1*renta);
    } else if (Tingreso == "plazo fijo") {
        resultado = 0.8*renta;
    }
    const mensaje= 'Nombre: ${nombre}\nTipo de Ingreso: ${tipoIngreso}\nValor Liqui recibido: $${resultado.toFixed(2)}';
    document.getElementById('resultado').innerText = mensaje;

}


function Limpiar() {
    document.getElementById("Formulario").reset();
    document.getElementById("resultado").innnerText = '';
    var renta = prompt("Su Renta");
}