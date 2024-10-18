function Notificacion({ isCompleted }) {
  return <div>Completado: {isCompleted ? '✔️' : '❌'}</div>;
}
export default function Ejercicio4() {
  return (
    <div>
      <Notificacion isCompleted={true} />
      <Notificacion isCompleted={false} />
    </div>
  );
}
