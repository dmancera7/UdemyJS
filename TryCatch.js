'usestrict'

try
{
    x = 10;
    //miFuncion(); //Esta linea activa el try-catch
}
catch(error)
{
    console.log('Cuerpo Try-Catch: ' + error);
}
finally
{
    console.log('Cuerpo Finally');
}

console.log("Codigo despues del try-catch");