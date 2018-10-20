import React, { Component } from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';
import ListaCitas from './Componentes/ListaCitas';

class App extends Component {

state = {
  citas: []
}

componentDidMount() {
const citasLS = localStorage.getItem('citas')
if(citasLS) {
  this.setState({
    citas: JSON.parse(citasLS)
  })
}
}

componentDidUpdate() {
  localStorage.setItem(
    'citas',
    JSON.stringify(this.state.citas)
  )
}


crearCita = (nuevaCita) =>{
  //crear copia del state y mandarle la nuevacita
const citas = [...this.state.citas, nuevaCita];
//mandar al state la nueva const con this.setState
this.setState ({
  citas: citas
})

}

borrarCita = id =>{
  const citasActuales = [...this.state.citas];

  //borrar la cita
  //existe una funcion que se llama.filter, lo que hara es buscar en todo el arreglo lo que le pasemos, y lo saca. 
  //Aqui le pedimos que traiga los que no sean iguales al id que le pasamos
  const citas = citasActuales.filter(cita => cita.id !== id );

  this.setState({
    citas:citas
  });


}

  render() {

    return (
      <div className="container">
      <Header 
      titulo={'Administrador de Pacientes Veterinaria'}
      />
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='col-md-6'>
            <AgregarCita
            crearCita={this.crearCita}
            />
            </div>

            <div className='col-md-6'>
            <ListaCitas
            citas={this.state.citas}
            borrarCita={this.borrarCita}
            />
            </div>
    
          </div>
      
        </div>

      </div>
    );
  }
}

export default App;
