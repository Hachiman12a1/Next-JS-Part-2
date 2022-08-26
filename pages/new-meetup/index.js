import React, { Fragment } from "react";
import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";


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

  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetUpHandler}></NewMeetupForm>
    </Fragment>
  );
}

export default index;
