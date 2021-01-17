import React from 'react'

import '../css/footer.css'

export const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <div className = 'cont-footer'>

            <div className = 'footer-letter'>

            <div>
                <p className = 'title-footer'>frameworks</p>
                <p>next.js</p>
                <p>create react app</p>
                <p>gatsby</p>
                <p>vue</p>
                <p>angular</p>
            </div>

            <div>
                <p className = 'title-footer'>resourse</p>
                <p>documentation</p>
                <p>guides</p>
                <p>api reference</p>
                <p>Blog</p>
                <p>oss</p>
            </div>

            <div>
                <p className = 'title-footer'>company</p>
                <p>home</p>
                <p>about</p>
                <p>careers</p>
                <p>pricing</p>
                <p>security</p>
            </div>

            <div>
                <p className = 'title-footer'>legal</p>
                <p>privacy policy</p>
                <p>terms of service</p>
                <p>Trademark Policy</p>
                <p>Inactivity Policy</p>
            </div>

            </div>

            <div className = 'copyright'>
                    <h3>Juan Cedeño</h3>
                <div className = 'social-footer'>

                    <p>Copyright &copy; {date} Cedeño Inc. All rights reserved.</p>

                    <a 
                    href = 'https://github.com/juan-cedeno'
                    target = '_blank' 
                    rel='noreferrer'>
                    <i className="fab fa-github"></i>
                    </a>

                    <a 
                    href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' 
                    target = '_blank'
                    rel='noreferrer'
                    ><i className="fab fa-linkedin"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}
