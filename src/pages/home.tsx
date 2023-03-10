import React  from 'react';
import youget from '../components/assets/FASHION/00.png';
import justgreen from '../components/assets/GREEN/6.png';
import wayhome from '../components/assets/TheWayHome/1.png';
import window from '../components/assets/WINDOWSEAT/1.png';
import kafka from '../components/assets/KAFKA/1.png';
import street from '../components/assets/StreetFood_image/4.png';



const Home = () => {
    return <div>
                <div className="row">
                        <div className='column'>
                            <a href="/fashion"><img className='fit-img' src={youget} alt=""/></a>
                            <div className='size-font'> YOU GET ME SO HIGH </div>
                        </div>

                        <div className='column'>
                            <a href="/justgreen"><img className='fit-img' src={justgreen} alt="" /></a> 
                            <div className='size-font'> JUST GREEN </div>
                        </div>
                    </div>   

                <div className="row">
                        <div className='column'>
                            <a href="/wayhome"><img className='fit-img' src={wayhome} alt=""/></a> 
                            <div className='size-font'> THE WAY HOME </div>
                        </div>

                        <div className='column'>
                            <a href="/window"><img className='fit-img' src={window} alt=""/></a> 
                            <div className='size-font'> WINDOW SEAT </div>
                        </div>
                </div>

                <div className="row">
                        <div className='column'>
                            <a href="/kafka"><img className='fit-img' src={kafka} alt=""/></a> 
                            <div className='size-font'> KAFKA FESTIVAL </div>
                        </div>

                        <div className='column'>
                            <a href="/streetfood"><img className='fit-img' src={street} alt=""/></a> 
                            <div className='size-font'> THE REAL STREET FOOD </div>
                        </div>
                </div>



            </div>
    }

export default Home;