import './LandingPage.css'


const LandingPage =()=>{
    return(
        <div className='topBackground' id='homepage'>
        <div className='landing'>
            <p className='greeting'>Hello My Name is</p>

            <h1 className='myName'>Racheal Aber</h1>

            <h3 className='myDescription'>A Creative Freelancer & Full Stack Developer</h3>

          <a href='#service'>  <button className='btnKnowMore'>KNOW MORE</button></a>


        </div>

        <div>
            <img src='/Rachea.png' id='myImageTop' alt='Racheal'/>
        </div>
        </div>
    )

}
export default LandingPage