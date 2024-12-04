import React, { useState } from 'react'
import CardArticlesView from './CardArticlesView'

function CardArticles({data}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };

    const hanldeOpenUrl = () => {
        window.open(data.url, "_blank");
      };

  return (
    <>
    <CardArticlesView 
        item={data} 
        toggleDescription={toggleDescription}
        isExpanded={isExpanded}
        hanldeOpenUrl={hanldeOpenUrl}/>
    </>
  )
}

export default CardArticles