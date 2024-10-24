import React from 'react'
import "./SocialMedia.css"
import { Link } from 'react-router-dom'
import socialMedia from '../../util/socialMedia'


function SocialMediaView() {
   
    return (
        <>
            <div className="container-social">
                {socialMedia.map((item, index) => (
                    <Link target='_blank' className="container-back" key={item.socialMedia}>
                        <button
                            name={item.socialMedia}
                            className="container-each"
                            style={{ backgroundColor: item.color }}
                        >
                            {item.icon}
                        </button>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default SocialMediaView