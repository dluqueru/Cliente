function EstadoConexion({ status }) {
  let msg = "";
  return <div>{
    status == "online" ? msg = "En línea" :
    (status == "offline" ? msg = "Desconectado" : msg = "Ausente")
    }</div>;
}
export default function Ejercicio6() {
  return (
    <div>
      <EstadoConexion status="online" />
      <EstadoConexion status="offline" />
      <EstadoConexion status="away" />
    </div>
  );
}
