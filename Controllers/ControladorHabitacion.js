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

    registrar(request,response){

        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:datosPeticion,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la habitacion",
                data:[],
                estado:false
            })

        }


    }

    editar(request,response){
        let id=request.params.id
        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje:"Exito editando la habitacion",
                data:datosPeticion,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

    elimnar(request,response){
        let id=request.params.id
        try{

            response.status(200).json({
                mensaje:"Exito eliminando la habitacion",
                data:[],
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

}