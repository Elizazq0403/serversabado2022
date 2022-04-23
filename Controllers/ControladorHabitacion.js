//CONTROLADOR:
//1. Recibir peticiones
//2. Ejecutar logica de negocio
//3. LLamar a la capa de SERVICIOS
//4. Enviar las respuestas al cliente
export class ControladorHabitacion{

    constructor(){}

    buscarTodas(request,response){

        let datos=[{nombre:"Juan",edad:32},{nombre:"Sara",edad:31}] //borrar despues
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:datos,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }
    }

    buscarPorId(request,response){

        let datos=[{nombre:"Juan",edad:32}] //borrar despues
        let id=request.params.id
        console.log(id)
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos "+id,
                data:datos,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }

    }

    registrar(request,response){}

    editar(request,response){}

    elimnar(request,response){}

}