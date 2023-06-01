const resumen = document.getElementById('resumen');
const borrar = document.getElementById('borrar');
let valor = 200;

// Calcular
resumen.addEventListener("click", myFunction);

function myFunction(){
    const cantidad = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;
    let total = valor * parseInt(cantidad);

    switch (categoria) {
        case 'Estudiante':
            total -= total * 0.8;
            document.getElementById('total_a_pagar').innerHTML = 'Total a pagar: $'+total;
            break;
        case 'Trainee':
            total -= total * 0.5;
            document.getElementById('total_a_pagar').innerHTML = 'Total a pagar: $'+total;
            break;
        case 'Junior':
            total -= total * 0.15;
            document.getElementById('total_a_pagar').innerHTML = 'Total a pagar: $'+total;
            break;
    }
}

// Borrar todo
borrar.addEventListener("click", borrarTodo);
function borrarTodo(){
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").selectedIndex = 0;
    document.getElementById('total_a_pagar').innerHTML = 'Total a pagar: $0';
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
}