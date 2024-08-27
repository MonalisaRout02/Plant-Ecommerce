import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './ParallaxPage.css';
import ParallaxEndSection from './Member';


export default function ParallaxPage() {
  return (

      <Parallax className="parallax"pages={2    } style={{ width: '100%', height: '100vh',background: 'linear-gradient(to bottom, #1E3822, #498052)'}}>
        <ParallaxLayer
          offset={1}
          speed={0}
          
        />
        
        {/* Text Box Layer */}
        <ParallaxLayer 
    
          offset={0.1}  
          speed={-0.4}
          style={{
            zIndex:'20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          <div  id="textBox">
            <h1 class="Textparallax" id="Heading">Discover the Beauty of Nature at PetalNest  </h1>
            <p  class="Text" id="description">At PetalNest, we offer a wide variety of plants, eco-friendly packaging, and expert care tips to help you create a tranquil and nature-inspired space in your home.</p>
          </div>
        </ParallaxLayer>

          
        <ParallaxLayer
          offset={0.2}
          speed={0.3}>
          <img src="/assets/Parallax/1.svg" style={{position:"absolute",top:'10px',width: '16%', marginLeft: '20%'}}  />
          <img src="/assets/Parallax/2.svg" style={{position:"absolute",top:'50px',width: '20%', marginLeft: '63%', }} />
        
        </ParallaxLayer>



      
        <ParallaxLayer
          offset={0.3}
          speed={0.5}
        >
          <img src="/assets/Parallax/3.svg" style={{position:"absolute",top:'200px',width: '16%', marginLeft: '25%'}}  />
          <img src="/assets/Parallax/4.svg" style={{position:"absolute",top:'250px',width: '20%', marginLeft: '53%', }} />
        </ParallaxLayer>

     
        <ParallaxLayer
          offset={0.4}
          speed={0.7}
          
        >
          <img src="/assets/Parallax/5.svg" style={{position:"absolute",top:'440px',width: '16%', marginLeft: '30%'}}  />
          <img src="/assets/Parallax/6.svg" style={{position:"absolute",top:'500px',width: '20%', marginLeft: '50%', }} />
        </ParallaxLayer>

    
        <ParallaxLayer
          offset={0.5}
          speed={0.8}
        
        >
          <img src="/assets/Parallax/7.svg" style={{position:"absolute",top:'670px',width: '16%', marginLeft: '37%'}}  />
        </ParallaxLayer>

       


        <ParallaxLayer
        offset={1}
        speed={0.8}>
          <div className="w-full h-auto" style={{position:"absolute" , top:'200px'}}>
          <ParallaxEndSection />
          </div>
          
        </ParallaxLayer>
      </Parallax> 
    
  );
}
