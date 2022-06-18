//Importar mongoose
import mongoose from 'mongoose';

//ESQUEMA
const Schema = mongoose.Schema; //ESQUEMA DE DATOS (QUE DATOS TIENE MI MODELO)

//CREO MI PROPIO ESQUEMA DE DATOS
const Reserva=new Schema({
    nombre :{
        type:String,
        required:true
    },
    apellido :{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },    
    fechaInicio:{
        type:Number,
        required:true
    },
    fechaFinal:{
        type:Number,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

//se envia el modelo de datos
export const modeloReserva=mongoose.model('reservaciones', Reserva);