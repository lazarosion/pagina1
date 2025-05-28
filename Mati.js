function send()
    {if (!nombre || !exampleFormControlInput1 || !asunto || !Mensaje) //si el campo no exite ALERTA "Campo vacío"       
       {nombre:nombre
        exampleFormControlInput1:exampleFormControlInput1
        asunto: asunto
        Mensaje: Mensaje
        alert ("Campo vacío")
        }
    else {nombre && exampleFormControlInput1 && asunto && Mensaje}
        alert ("Mensaje enviado correctamente")
    }     