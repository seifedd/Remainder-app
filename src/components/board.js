import React from "react";
import List from "./list";
import "./board.css";
const Info = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sofia Cooper",
    birthday: "1995-01-31",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Miller Wright",
    birthday: "1998-05-29",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Tara Kelly",
    birthday: "1989-04-24",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Freddie Watson",
    birthday: "1999-10-15",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brianna Baker",
    birthday: "1994-07-05",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brad Myers",
    birthday: "1997-01-28",
  },
];

//Render a React Functional components have to be defined with capital letters
export default function Board() {
  return (
    <div id="site-main">
      <h1 className="text-dark-tile">Birthday Remainder</h1>
      <div className="Board">
        <List info={Today(Info)} upcoming={false}></List>
      </div>
      <div className="upcoming">
        <h2 className="text-dark-tile">Upcoming</h2>
        <List info={Upcoming(Info)} upcoming={true}></List>
      </div>
    </div>
  );
}

function Today(person) {
  let TodayDay = new Date().getDay();
  let TodayMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let Day = new Date(data.birthday).getDay();
    let month = new Date(data.birthday).getMonth();

    return TodayDay === Day && TodayMonth === month;
  });
  return filter;
}

function Upcoming(person, toMonth = 7) {
  let TodayDay = new Date().getDay();
  let TodayMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let Day = new Date(data.birthday).getDay();
    let Month = new Date(data.birthday).getMonth();
    if (Day === TodayDay) return;
    return TodayMonth <= Month && Month <= TodayMonth + toMonth;
  });

  return filter;
}
