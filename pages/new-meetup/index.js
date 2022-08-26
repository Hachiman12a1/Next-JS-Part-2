import React from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

index.propTypes = {};

function index(props) {
  const router = useRouter();
  const addNewMeetUpHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/"); 
  };

  return <NewMeetupForm onAddMeetup={addNewMeetUpHandler}></NewMeetupForm>;
}

export default index;
