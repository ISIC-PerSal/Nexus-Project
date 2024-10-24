import React from "react";

function restructureSelect(array) {
  const json = array.map((item) => ({
    ...item,
    value: item.label.props.children[1],
  }));

  json.sort((a, b) => a.value.localeCompare(b.value));

  return json;
}

export default restructureSelect;
