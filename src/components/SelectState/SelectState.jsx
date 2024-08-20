import React from "react";
import SelectStateView from "./SelectStateView";

function SelectState({ estados, state, setState }) {
  const handleStateChange = (selectedState) => {
    const selectedStateName = selectedState.label.props.children[1];
    setState(selectedStateName);
  };
  return (
    <>
      <SelectStateView
        estados={estados}
        state={state}
        handleStateChange={handleStateChange}
      />
    </>
  );
}

export default SelectState;
