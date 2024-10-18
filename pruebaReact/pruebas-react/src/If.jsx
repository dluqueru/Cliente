function Drink({ name }) {

    let contenidoElemento = ['hoja', '15–70 mg/taza', '4,000+ años']

    if(name !== 'té'){
        contenidoElemento = ['grano', '80–185 mg/taza', '1,000+ años'];
    }

    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt><em>Parte de la planta</em></dt>
          <dd>{contenidoElemento[0]}</dd>
          <dt><em>Contenido de cafeína</em></dt>
          <dd>{contenidoElemento[1]}</dd>
          <dt><em>Antigüedad</em></dt>
          <dd>{contenidoElemento[2]}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }