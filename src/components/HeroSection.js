import { Link } from 'react-router-dom';
import image1 from './images/image1.jpg';

const Hero= () =>{
    return(
        <section className='Hero'>
            <h1 id="motto">Everything You Need, Delivered to Your Door</h1>
            <p id="description">Discover a diverse collection of products for every need<br/> – from fashion to electronics, home goods, and more.<br/> Each item is carefully selected for quality, durability, and style.
            <br/> With a commitment to convenience and customer satisfaction, 
            <br/> we bring you a shopping experience you can rely on</p>

             <div>
             <img src={image1} alt="advert"/>
             </div>
        
             <div className='box'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
             <path d="M7.919 17.377l-4.869-13.377h-2.05c-.266 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707 0-.552.447-1 1-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021c.032.19.049.385.049.584 0 1.932-1.569 3.5-3.5 3.5-1.932 0-3.5-1.568-3.5-3.5 0-1.363.781-2.545 1.919-3.123zm1.581 1.811c.724 0 1.312.588 1.312 1.312 0 .724-.588 1.313-1.312 1.313-.725 0-1.313-.589-1.313-1.313s.588-1.312 1.313-1.312zm13.314-6.512l-11.418 4.156-2.736-7.518 11.418-4.156 2.736 7.518zm-8.71-3.215l-2.88 1.048 1.368 3.759 7.659-2.787-1.368-3.759-2.9 1.055.684 1.879-1.879.685-.684-1.88zm2.672-4.165l-8.458 3.078-1.927-5.296 8.457-3.078 1.928 5.296zm-3.123-2.733l-4.699 1.711.56 1.537 4.698-1.71-.559-1.538z"/></svg>
                The world's #1<br/> shopping platform!
             </div>
             
             <Link to ="/Products">
             <button className='moreButton'>Start Shopping Now</button>
             </Link>

            
        </section>

    )
}

export default Hero;