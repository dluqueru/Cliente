import './App.css'

function App() {
  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    image: {
      url: 'https://i.imgur.com/7vQD0fPs.jpg'
    }
  };
  
  return (
    <>
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={person.image.url}
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
    </>
  );
}

export default App
