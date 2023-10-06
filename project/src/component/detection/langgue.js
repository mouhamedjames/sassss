import React from 'react'
import "./lang.css"
const Langgue = () => {
    return (
        <div>
            <div class="logo">
                <a href="#"><img src="https://bluebits.dev/wp-content/uploads/2020/06/cropped-logo-1.png" alt=""/></a>
            </div> 
            <div class="lang-menu">
                <div class="selected-lang">
                    English
                </div>
                <ul>
                    <li>
                        <a href="#" class="de">German</a>
                    </li>
                    <li>
                        <a href="" class="en">English</a>
                    </li>
                    <li>
                        <a href="" class="fr">French</a>
                    </li>
                    <li>
                        <a href="" class="ar">Arabic</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Langgue
