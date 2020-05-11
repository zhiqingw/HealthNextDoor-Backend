import React, { useState } from "react";

import Button from "../components/Button";
import { addCaregiver } from "../api";
export default function Header() {
   const [id, setId] = useState("");
   const [first_name, setFirstName] = useState("");
   const [last_name, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [introduction, setIntroduction] = useState("");
  function onSubmit() {
     addCaregiver({
       id,
       first_name,
       last_name,
       gender,
       introduction
     });
  }

  return (
    <div className="addCaregiver">
      Add New Author
      <form>
        <input
          type="text"
          placeholder="Caregiver id"
          name="id"
          value={id}
          onChange={event => {
          setId(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={first_name}
          onChange={event => {
          setFirstName(event.target.value);
           }}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={last_name}
          onChange={event => {
          setLastName(event.target.value);
          }}
        />
        <input
            type="text"
            placeholder="gender"
            name="gender"
            value={gender}
            onChange={event => {
              setGender(event.target.value);
            }}
        />
        <input
            type="text"
            placeholder="Introduction"
            name="introduction"
            value={introduction}
            onChange={event => {
              setIntroduction(event.target.value);
            }}
        />
        <Button className={"btn-success"} onClick={onSubmit}>
          Save
        </Button>
      </form>
    </div>
  );
}
