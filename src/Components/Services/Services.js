import './Services.css';

const Services = ()=>{
return(
    <div className='services' id='service'>



<h1 id='serviceTitle'>_Services</h1>
<h2 id='iCanDo'>What She Can Do</h2>
<div className='serviceCards'>

    <div className='skillCard'>
        <img src='/code.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>Clean Code</h3>
        <p className='cardDescription'>Racheal writes pristine, efficient code that's a joy to work with. She ensures your software is not just functional, but also maintainable and scalable, saving you time and resources in the long run.</p>
    </div>

    <div className='skillCard'>
        <img src='/branding.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>Branding</h3>
        <p className='cardDescription'>Racheal crafts compelling brand identities that resonate with your audience. She translates your company's values and vision into a cohesive visual and messaging strategy, helping you stand out in a crowded market.</p>
    </div>


    <div className='skillCard'>
        <img src='/review.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>User Experience</h3>
        <p className='cardDescription'>Racheal designs intuitive and engaging interfaces that prioritize user needs, enhancing satisfaction and improving the overall interaction between your customers and your digital products.</p>
    </div>


    <div className='skillCard'>
        <img src='/world-wide-web.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>Web Development</h3>
        <p className='cardDescription'>Racheal crafts sleek, functional websites tailored to your needs. She transforms your vision into a dynamic online presence, ensuring your site stands out in the digital landscape.</p>
    </div>
    
</div>



<div className='serviceCards'>

    <div className='skillCard'>
        <img src='/ui.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>UI/UX Design</h3>
        <p className='cardDescription'>Racheal designs interfaces that not only look stunning but also work intuitively. She combines aesthetics with functionality to create digital experiences that delight your users and drive engagement.</p>
    </div>

    <div className='skillCard'>
        <img src='/mobile-development.png' id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>Mobile App Development</h3>
        <p className='cardDescription'>Racheal brings your app ideas to life, creating intuitive and powerful mobile applications for iOS and Android. She focuses on delivering a seamless user experience that keeps your audience engaged.</p>
    </div>


    <div className='skillCard'>
        <img src='/api.png' id='cardIcons'alt='icon'/>
        <h3 className='cardTitle'>API Development and Integration</h3>
        <p className='cardDescription'>Racheal builds robust APIs that connect your systems seamlessly. She ensures smooth data flow and integration, enhancing your software's functionality and opening new possibilities for your business.</p>
    </div>

    <div className='skillCard'>
        <img src='/responsive.png'id='cardIcons' alt='icon'/>
        <h3 className='cardTitle'>Responsive Design</h3>
        <p className='cardDescription'>Racheal creates websites that look and function flawlessly across all devices. Her responsive designs adapt to various screen sizes, ensuring your content is accessible and attractive to users on desktops, tablets, and smartphones.</p>
    </div>
    
</div>
    </div>
)


}

export default Services