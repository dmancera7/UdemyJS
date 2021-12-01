let miPromesa = new Promise((resolver, rechazar) => 
{
    let expresion = true;

    if(expresion)
    {
        resolver('Resuelto correctamente');
    }
    else
    {
        rechazar('Se produjo un error. Rechazado');
    }
});

//Las 2 lineas siguientes son lo mismo
//miPromesa.then(exito => console.log(exito), error => console.log(error));
miPromesa.then(exito => console.log(exito)).catch(error => console.log(error));