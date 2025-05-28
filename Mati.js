function enviar() //envía todos los campos completos de los datos del usuario.
    
    {   let nombre= document.getElementById ('nombre');
        let email= document.getElementById ('email');
        let asunto= document.getElementById ('asunto');
        let mensaje= document.getElementById ('mensaje');

        if (!nombre || !email || !asunto || !mensaje) //si el campo no exite ALERTA "Campo vacío"
           
            { alert ("Campo vació")}
            
        }

var objeto=
    {nombre: nombre,
     email: email,
     asunto: asunto,
     mensaje: mensaje
    };

    function send(){
      alert("enviado")
    }

