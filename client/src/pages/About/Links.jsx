import React from 'react'

import github from '../../assests/github.svg'
import linkedin from '../../assests/linkedin.svg'
import code from '../../assests/code.svg'

const Links = () => {
  return (
    <div className='about-links'>
        <p className='about-links-1'> <img src={github} alt="Github" width={20} />
          <a href="https://github.com/PandeeswariShan029" target='_blank' rel="noopener noreferrer">
            Github</a></p>  
        <p className='about-links-1'> <img src={linkedin} alt="LinkedIn" width={20} />
          <a href="https://www.linkedin.com/in/pandeeswari-k-77a6b6218/" target='_blank' rel="noopener noreferrer">
          LinkedIn</a></p>  
        
    </div>
  )
}

export default Links