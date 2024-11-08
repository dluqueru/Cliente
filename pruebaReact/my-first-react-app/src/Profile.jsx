import './Profile.css'

function Profile({name = 'John Doe', age = 100, email = 'example@email.com', imageSrc = 'src/img/notFound.jpg'}) {

  return (
    <div className='borde'>
      <img src={imageSrc} alt="fotillo" />
      <h1 id='nombre' className='texto'>{name}</h1>
      <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum maiores veritatis non animi pariatur quasi nam tempore vitae, aperiam architecto aspernatur, quidem nostrum voluptatibus officiis eaque similique, expedita quaerat qui ipsa nihil odio! Eveniet voluptatem culpa accusamus expedita quaerat veritatis molestias ratione dolorum quidem, blanditiis quae magni delectus officia!</p>
      <h3>Edad: {age}</h3>
      <h3>Correo: {email}</h3>
      <div className="container">
        <ul>
          <li>Javascript</li>
          <li>Php</li>
          <li>Python</li>
          <li>Java</li>
          <li>CSS</li>
        </ul>
      </div>
    </ div>
  )
}

export default Profile
