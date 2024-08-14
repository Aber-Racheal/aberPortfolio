import './About.css'


const About = ()=>{
return(
    <div className='about' id='aboutpage'>
        <div className='aboutContainer'>
            <div className='imageContainer'>
                <img src='/Rachea.jpg' id='myImage' alt='Racheal'/>
            </div>

            <div className='aboutContent'>
                <h1 className='aboutH'>_About</h1>
                <h1 className='aboutTitle'>Who Is Racheal</h1>
                <p className='aboutParagraph'>Artificial intelligence and virtual reality have proven to be leading niches for most young people, captivating their imagination and offering unprecedented opportunities for innovation and personal growth. Racheal believes the intersection of AI-powered chatbots, immersive VR environments, and mental wellness can create a safe haven for mentally unwell youth. Driven by her background in software engineering and her deep appreciation for music, she envisions machine learning algorithms and data analytics as essential tools in creating personalized, empowering digital spaces where young people can find solace and support on their mental health journeys.</p>
                
                <div className='codeSkills'>
                    <div className='codeColumn'>
                      
                      <div>
                    <p className='skillParagraph'>Html5</p>
                    <p className='starrating'>**** </p>
                   
                        </div>  

                        <div>
                    <p className='skillParagraph'>CSS3</p>
                    <p className='starrating'>****</p>
                  
                        </div>  

                        <div>
                    <p className='skillParagraph'>Javascript</p>
                    <p className='starrating'>***</p>
                  
                        </div>  
                    </div>
                    


                    <div className='codeColumn1'>
                      
                      <div>
                    <p className='skillParagraph'>Kotlin</p>
                    <p className='starrating'>**</p>
                 
                        </div>  

                        <div>
                    <p className='skillParagraph'>Python</p>
                    <p className='starrating'>***</p>
                  
                        </div>  

                        <div>
                    <p className='skillParagraph'>Data and Software Architecture</p>
                    <p className='starrating'>****</p>
                   
                        </div>  
                    </div>
                    

                    <div className='codeColumn2'>
                      
                      <div>
                    <p className='skillParagraph'>UX Design</p>
                    <p className='starrating'>****</p>
                  
                        </div>  

                        <div>
                    <p className='skillParagraph'>Product Management</p>
                    <p className='starrating'>***</p>
                 
                        </div>  

                        <div>
                    <p className='skillParagraph'>UX Reseach</p>
                    <p className='starrating'>***</p>
                  
                        </div>  
                    </div>
                    
                </div>
                <button id='btnCV'>Open CV</button>
            </div>
        </div>

    </div>
)
}
export default About