import Profile from './Profile';
import './Profile.css'
import UserList from './UserList';

function About(){

    return(
        <>
            <h1 className='about'>About us</h1>
            <div>
                <Profile name='Daniel' age = {29} email = 'dluqueru@gmail.com' imageSrc="src/img/800px-Sandro_Botticelli_070.jpg"/>
                <Profile name='Cristina' age = {31} email = 'cristina@gmail.com'/>
                <Profile/>
                <UserList />
            </div>
        </>
    );
}

export default About