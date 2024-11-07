import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [cuenta, setCuenta] = useState({
    nombre: "",
    pelicula: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const manejaFormulario = (e) => {
    e.preventDefault();
    const exp1 = /^[a-zA-Záéíóúñ]{3,}$/;
    const exp2 = /^\w{6,}$/;
    console.log(exp1.test(cuenta.nombre));
    console.log(exp2.test(cuenta.pelicula));
    if (exp1.test(cuenta.nombre.trim()) && exp2.test(cuenta.pelicula.trim())) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={manejaFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onBlur={(e) => setCuenta({ ...cuenta, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cuál es tu película favorita"
          onBlur={(e) => setCuenta({ ...cuenta, pelicula: e.target.value })}
        />
        <input type="submit" value="Enviar" />
      </form>
      {mostrar && <Card nombre={cuenta.nombre} pelicula={cuenta.pelicula} />}
      {error && <p>Por favor chequea que la información sea correcta</p>}
    </div>
  );
}

export default App;
