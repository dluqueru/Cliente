function AvisoError({ hasError }) {
  return <div>{hasError && "Ha ocurrido un error"} Un div</div>;
}
export default function Ejercicio3() {
  return (
    <div>
      <AvisoError hasError={true} />
      <AvisoError hasError={false} />
    </div>
  );
}