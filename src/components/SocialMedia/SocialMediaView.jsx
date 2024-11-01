import React from "react";
import "./SocialMedia.css";
import socialMedia from "../../util/socialMedia";
import { Link } from "react-router-dom";

function SocialMediaView() {
  return (
    <>
      <div className="container-social">
        {socialMedia.map((item, index) => (
          <Link
            target="_blank"
            to={item.link}
            className="container-back"
            key={index}
          >
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
  );
}

export default SocialMediaView;
