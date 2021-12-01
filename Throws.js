let resultado = 5;

try
{
    if(isNaN(resultado))
        throw 'No es un numero';
    else if(resultado == '')
        throw 'Cadena vacia'
    else if(resultado >= 0)
        throw 'Valor positivo o igual a cero'
    else if(resultado < 0)
        throw 'Valor negativo o menor a cero'
}
catch(error)
{
    console.log('Try-Catch Error: ' + error);
    //console.log(error.name);
    //console.log(error.message);
}