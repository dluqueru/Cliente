import Profile from "./Profile";
import About from "./About";

function App(){

    return(
        <>
        <About />
        <div>
        <Profile name='Daniel' age = {29} email = 'dluqueru@gmail.com'/>
        <Profile name='Cristina' age = {31} email = 'cristina@gmail.com'/>
        <Profile/>
        </div>
        </>
    );
}

export default App