import './App.css'

function App() {

  return (
    <>
    <Imagen />
    <Nombre />
    <Bio />
    <Edad />
    <Correo />
    </>
  )
}

function Nombre(){
  return <h1 className='texto'>Daniel Luque</h1>
}

function Bio(){
  return (
    <>
    <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum maiores veritatis non animi pariatur quasi nam tempore vitae, aperiam architecto aspernatur, quidem nostrum voluptatibus officiis eaque similique, expedita quaerat qui ipsa nihil odio! Eveniet voluptatem culpa accusamus expedita quaerat veritatis molestias ratione dolorum quidem, blanditiis quae magni delectus officia!</p>
    </>
  )
}

function Edad(){
  return <h3>Edad: 29</h3>
}

function Correo(){
  return <h3>Correo: dluqueru@gmail.com</h3>
}

function Imagen() {
  return (
    <>
    <img src="src/img/Fayum02.jpg" alt="fotillo" />
    </>
  )
}

export default App
