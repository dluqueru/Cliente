function MensajeBienvenida({ isLoggedIn }) {
  let mensaje = "Bienvenido de nuevo";

  if (!isLoggedIn) {
    mensaje = "Por favor, inicia sesión";
  }

  return (
    <section>
      <h1>{mensaje}</h1>
    </section>
  );
}

export default function Ejercicio1() {
  return (
    <div>
      <MensajeBienvenida isLoggedIn={true} />
      <MensajeBienvenida isLoggedIn={false} />
    </div>
  );
}
