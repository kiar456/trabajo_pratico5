import React from "react";
import Boton from "./Boton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Listado">
        Materias y Informacion
        <Boton titulo="Listado" />
      </div>
    );
  }
}
