import React from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

index.propTypes = {};

function index(props) {
  const addNewMeetUpHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetUpHandler}></NewMeetupForm>;
}

export default index;
