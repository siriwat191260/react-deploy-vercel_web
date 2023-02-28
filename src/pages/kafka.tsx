import k1 from '../components/assets/KAFKA/1.png';
import k2 from '../components/assets/KAFKA/2.png';
import k3 from '../components/assets/KAFKA/3.png';
import k4 from '../components/assets/KAFKA/4.png';
import k5 from '../components/assets/KAFKA/5.png';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Kafka = () => {
    return <div>
                <div className="font-size-str margin-l-3"> KAFKA FESTIVAL </div>
                <div className="font-size-str-intro margin-l-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, rem eos, iste quae ut, eaque accusamus odio ipsam nobis neque ratione. Molestiae debitis corrupti magnam nisi eligendi minima nobis dolores. </div>
                
                <div className='row margin-t-5'>
                    <img src={k1}/>
                </div>
                <div className='row'>
                    <img src={k2}/>
                </div>
                <div className='row'>
                    <img src={k3}/>
                </div>
                <div className='row'>
                    <img src={k4}/>
                </div>
                <div className='row'>
                    <img src={k5}/>
                </div>

                <div className='margin-l-3 margin-t-20'>
                            <div className='font-size-b' ><a href="/windowseat"> ◄ WINDOW SEAT  </a></div>
                            <div className='font-size-b next' ><a href="/streetfood"> THE REAL STREET FOOD ► </a></div>
                    </div>   

             </div>
}

export default Kafka;