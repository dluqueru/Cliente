function EstadoConexion({ status }) {
  return <div>{/* Usa ternarios anidados para mostrar el estado */}</div>;
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