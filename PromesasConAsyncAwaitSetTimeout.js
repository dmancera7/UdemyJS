async function funcionPromesaYAwait()
{
    let promesa = new Promise(resolver => 
    {
        resolver('Funcion "funcionPromesaYAwait"');
    });
    
    console.log(await promesa);
}

//Promesas, Await, Async y SetTimeout
async function funcionConPromesaAwaitYSetTimeout()
{
    console.log("Inicio de funcion con Promesa, Await y SetTimeout");
    let miPromesa = new Promise(resolver =>
    {
        setTimeout( () => resolver('Promesa con Await y SetTimeout'), 3000 );
    })

    console.log(await miPromesa);
}

funcionConPromesaAwaitYSetTimeout();

/*
Nota:

En la funcion 'funcionConPromesaAwaitySetTimeout'
El 'await' hace que el codigo despues del mismo se espere hasta que termine el await
*/