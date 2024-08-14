import './Navigation.css';
const Navigation =()=>{
return(
    <div className='body'>

    <div className='navLinks'>

        <div>
        <img src='./RachealLogo.png' id='myLogo' alt='Racheal'/>
        </div>
   <div className='whole-navigation'>
   <a href='#homepage' id='home'>Home</a>
    <a href='#aboutpage'id='about'>About</a>
    <a href='#service'id='about'>Services</a>
    <a href='#projectSection' id='contacts'>Projects</a>
    <a href='#footer' id='projects'>Contacts</a>
   </div>

    </div>
 
    </div>
)
}

export default Navigation