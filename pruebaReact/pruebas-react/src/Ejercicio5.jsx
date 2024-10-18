function Tarea({ nombre, isDone }) {
    if(isDone){
        return null;
    }
  return <li>{nombre}</li>;
}
export default function Ejercicio5() {
  return (
    <ul>
      <Tarea nombre="Aprender React" isDone={true} />
      <Tarea nombre="Hacer ejercicios de JavaScript" isDone={false} />
      <Tarea nombre="Practicar CSS" isDone={false} />
    </ul>
  );
}
