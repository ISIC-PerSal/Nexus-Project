import React from 'react'
import FooterView from './FooterView'
import FooterTranslator from './FooterTranslator';
import { useNexusContext } from '../../Hooks/useNexusContext';

function Footer() {
    const typeUser = sessionStorage.getItem("type") || "General";

  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = FooterTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

  return (
    <>
    <FooterView type={typeUser} handleLanguage={handleLanguage}/>
    </>
  )
}

export default Footer