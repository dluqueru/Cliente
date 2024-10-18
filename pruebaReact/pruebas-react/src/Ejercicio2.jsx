function EstadoDeCuenta({ isPositive }) {
  return <div>{isPositive ? 'Saldo positivo' : "Saldo negativo"}</div>;
}
export default function Ejercicio2() {
  return (
    <div>
      <EstadoDeCuenta isPositive={true} />
      <EstadoDeCuenta isPositive={false} />
    </div>
  );
}
