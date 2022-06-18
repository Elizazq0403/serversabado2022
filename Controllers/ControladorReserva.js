
//Importo el ervicio
import {ServicioReserva} from '../services/ServicioReserva.js'


export class ControladorReserva{
    
    constructor(request,response){}

    async buscarPorId(request,response){

        let servicioReserva= new ServicioReserva()
       
        let id=request.params.id
        console.log(id)
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando la reserva "+id,
                data:await servicioReserva.buscarPorId(id),
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

    async registrar(request,response){

        let servicioReserva= new ServicioReserva()

        let datosPeticion=request.body
        try{

            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito haciendo la reserva",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos haciendo la reserva",
                data:[],
                estado:false
            })

        }


    }

    async editar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

    async elimnar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

    
}