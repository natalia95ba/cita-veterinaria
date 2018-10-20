import React, {Component} from 'react';

class Cita extends Component {
    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
}
    render() { 
        const {Fecha, Hora, Mascota, Propietario, Sintomas} = this.props.info;
        return ( 
            <div className='media mt-3'>
            <div className='media-body'>
            <h3 className='mt-0'>{Mascota}</h3>
            <p className='card-text'><span>Nombre del Dueño: </span> {Propietario} </p>
            <p className='card-text'><span>Fecha: </span> {Fecha}  </p>
            <p className='card-text'><span>Hora: </span>  {Hora}</p>
            <p className='card-text'><span>Sintomas: </span> </p>
            <p className='card-text'> {Sintomas} </p>

            <buttom onClick={this.eliminarCita} className='btn btn-danger'>Borrar
            </buttom>

            </div>
            </div>
         );
    }
}
 
export default Cita;