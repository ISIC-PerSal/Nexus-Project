import React from "react";

function TruncatedText({ text = "", long = 50, size = "15" }) {
  const maxLength = long;

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <p style={{fontSize:`${size}px`}}>{truncatedText}</p>;
}

export default TruncatedText;
