import express from 'express'

//Importo el controlador de Habitaciones
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'

//Importo el controlador de Reservas
import {ControladorReserva} from '../Controllers/ControladorReserva.js'


//Creo un objeto de la clase ControladorHabitacion
let controladorHabitacion=new ControladorHabitacion()

//Creo un objeto de la clase ControladorHabitacion
let controladorReserva=new ControladorReserva()

//UTILIZO el metodo Router() de express
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
rutas.get('/cesdecesdec', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/sabado', controladorHabitacion.registrar)
rutas.put('/api/v1/sabado/:id', controladorHabitacion.editar)
rutas.delete('/api/v1/sabado/:id', controladorHabitacion.elimnar)
rutas.get('/api/v1/reserva/:id', controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva', controladorReserva.registrar)
rutas.put('/api/v1/reserva/:id', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id', controladorReserva.elimnar)
