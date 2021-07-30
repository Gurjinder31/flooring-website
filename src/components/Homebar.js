import React from 'react'
import './Homebar.css'

const Homebar = () => {
    return (
        <div className='Homebar--container' >
            <header className="masthead bg-primary text-blue text-center">
                <div className=" container d-flex align-items-center flex-column" >
                    <h1 class="masthead-heading text-uppercase mb-0">WELCOME MOG SERVICES</h1>
                    <div class="divider-custom divider-blue">
                        <div class="divider-custom-line my--line"></div>
                        <div class="divider-custom-icon my--line"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line my--line"></div>
                    </div>

                    <p class="masthead-subheading font-weight-light mb-0">Build - On - Trust</p>
                </div>
            </header>
        </div>
    )
}

export default Homebar;
