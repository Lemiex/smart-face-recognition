import React from 'react'
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 80 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa4">
                    <img style={{ paddingTop: '1px' }} src={brain} alt='logo' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo