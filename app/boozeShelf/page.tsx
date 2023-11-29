"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const MENU = [
  {
    name: "Amaro number 1",
    icon: "",
  },
  {
    name: "Amaro number 2",
    icon: "",
  },
  {
    name: "Amaro number 3",
    icon: "",
  },
  {
    name: "Amaro number 4",
    icon: "",
  },
  {
    name: "Amaro number 5",
    icon: "",
  },
];

const Actions = styled.section`
  background: "#BF4F74";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 5em;
  background: papayawhip;
  max-width: 1000px;
  border: tomato dotted 5px;
`;

export default function Page() {
  // add to shelf
  // remove from shelf
  // add amount in bottle
  const id = React.useId();

  function addToShelf() {
    console.log("adding to shelf!");
  }

  function removeFromShelf() {
    console.log("remove from shelf!");
  }

  // item name, item icon,
  return (
    <Wrapper>
      <div>Liquid Inventory</div>
      <div>Where I can easily figure out what I have on hand</div>

      <div>Wine Fridge</div>
      {MENU.map(({ name }) => (
        <ul key={id}>
          <li>
            <FontAwesomeIcon icon={faWineBottle} />
          </li>
        </ul>
      ))}
      <div>Bar</div>

      <Actions onClick={addToShelf}>Add to shelf</Actions>
      <Actions onClick={removeFromShelf}>Remove from shelf</Actions>
      <Actions onClick={() => console.log("meow")}>Suggestion</Actions>
    </Wrapper>
  );
}
