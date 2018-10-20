import React, {Component} from 'react';
import uuid from 'uuid';

class AgregarCita extends Component{
    state={
error: false
    }

    //refs
nombreMascotaRef = React.createRef();
nombreDueñoRef = React.createRef();
fechaRef = React.createRef();
horaRef = React.createRef();
sintomasRef = React.createRef();


    crearNuevaCita = (e) => {
    e.preventDefault(); 


    const mascota = this.nombreMascotaRef.current.value;
    const propietario = this.nombreDueñoRef.current.value;
    const fecha = this.fechaRef.current.value;
    const hora = this.horaRef.current.value;
    const sintomas = this.sintomasRef.current.value;

    if(mascota === '' || propietario ==='' || fecha ==='' || hora==='' || sintomas ==='') {
       this.setState({ 
           error: true
       }) //esto es para que si hay algun campo vacio
       //el error en el state cambie a true
    } else {

        const nuevaCita = {
            id: uuid(),
            Mascota : mascota,
            Propietario : propietario,
            Fecha : fecha, 
            Hora : hora, 
            Sintomas: sintomas
        }
        //se envia el objeto hacia el padre para atualizar el state
            this.props.crearCita(nuevaCita);
            //reiniciar formulario
            e.currentTarget.reset();
            //elimine el error si existio
            this.setState({
                error:false
            })

    }


}
render() {
    //para mostar el mensaje de error 
    const existeError = this.state.error;

    return(
        <div className='card mt-5'>
{/*Esto le agrega unos estilos en boostrap */}
          <div className='card-body'>
{/* Esto agrega un poco de espacio entre las letras
y la parte de arriba del cuadro */}
          <h2 className='card-title text-center mb-5'>Agrega las citas aquí</h2>
          
<form onSubmit={this.crearNuevaCita}>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
          <div className="col-sm-8 col-lg-10">
              <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
          </div>
      </div>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
          <div className="col-sm-8 col-lg-10">
              <input ref={this.nombreDueñoRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
          </div>
      </div>

       <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
          <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input ref={this.fechaRef} type="date" className="form-control" />
          </div>                            

          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
          <div className="col-sm-8 col-lg-4">
              <input ref={this.horaRef} type="time" className="form-control" />
          </div>
      </div>

      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
          <div className="col-sm-8 col-lg-10">
              <textarea  ref={this.sintomasRef} className="form-control"></textarea>
          </div>
      </div>
      <div className="form-group row justify-content-end">
          <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">Agregar</button>
          </div>

      </div>
</form> 

{existeError ? <div className='alert alert-danger text-center'> 'Todos los campos son obligatorios'</div> : ''}

</div>
</div>
    )
}

}

export default AgregarCita; 