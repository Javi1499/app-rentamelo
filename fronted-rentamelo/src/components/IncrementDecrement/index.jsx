import React from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IncrementDecrement from "./styled";

const Component = ({ limit, valueSelect, setValueSelect }) => {


  const personIncrement = () => {
    console.log("Subio")
    const newValue = valueSelect + 1;
    if (newValue <= limit) {
      setValueSelect(newValue);
    }
  };

  const personReduce = () => {
    const newValue = valueSelect - 1;
    if (newValue >= 0) {
      setValueSelect(newValue);
    }
  };

  const minDisable = valueSelect === 0;
  const maxDisable = valueSelect === limit;

  return (
    <IncrementDecrement>
      <IncrementDecrement.Icon isDisable={minDisable} onClick={personReduce}>
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
      </IncrementDecrement.Icon>
      <IncrementDecrement.Value>{valueSelect}</IncrementDecrement.Value>
      <IncrementDecrement.Icon isDisable={maxDisable} onClick={personIncrement}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </IncrementDecrement.Icon>
    </IncrementDecrement>
  );
};

export default Component;
export { Component as IncrementDecrement };
