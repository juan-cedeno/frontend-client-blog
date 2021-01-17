import React from 'react'
import react from '../assets/react.png'

import '../css/banner.css'

export const Banner = () => {
    return (
        <>
          <div className = 'banner'>

              <div className = 'letter-banner'>
                  <h3>You learn new web and mobile technologies.</h3>
                  <p>And above all, stay informed.</p>
              </div>

              <div className = 'img-banner'>
                  <img src = {react} alt = 'react banner'/>
              </div>
         </div>  
        </>
    )
}
