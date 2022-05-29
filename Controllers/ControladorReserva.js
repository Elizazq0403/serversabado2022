class ControladorReserva{
    
    constructor(request,response){}

    buscarPorId(request,response){
        let datos=[{nombre:"Juan",edad:32}] //borrar despues
        let id=request.params.id
        console.log(id)
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando la reserva "+id,
                data:datos,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando la reserva: "+error,
                data:[],
                estado:false
            })
        }
    }

    crear(request,response){}

    editar(request,response){}

    cancelar(request,response){}

    
}