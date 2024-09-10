import React, { useState } from 'react'
import CardODSView from './CardODSView';

function CardODS({item}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <>
     <CardODSView item={item} toggleDescription={toggleDescription} isExpanded={isExpanded}/>
    </>
  );
}

export default CardODS