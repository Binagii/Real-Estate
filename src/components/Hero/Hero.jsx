import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'


const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
            {/* left-side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Dicover <br />
                         Most Suitable <br />
                         Property
                    </h1>
                </div>
                
                <div className="flexColStart hero-des">
                    <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
                    <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                    
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Premium Products
                            </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Happy Customers
                            </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={28} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Award Winnings
                            </span>
                    </div>
                </div>
            </div>
            {/* right-side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="hero-image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero