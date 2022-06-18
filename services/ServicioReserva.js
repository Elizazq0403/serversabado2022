//Importamos el modelo de datos
import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

    async registrar(reserva){
        let reservaARegistrar=new modeloReserva(reserva)
        return await reservaARegistrar.save()
    }

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas
    }

    async buscarPorId(id){
        let reservas=await modeloReserva.findById(id)
        return reservas
    }

    async editar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}