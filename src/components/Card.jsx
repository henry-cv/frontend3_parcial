/* eslint-disable react/prop-types */
const Card = ({ nombre, pelicula }) => {
  //console.log(props);
  //console.log(props.nombre, props.pelicula);
  console.log(`nombre: ${nombre}, pelicula: ${pelicula}`);
  return (
    <div>
      <h4>Hola: {nombre}!</h4>
      <p>tu película favorita es: {pelicula}</p>
    </div>
  );
};

export default Card;
