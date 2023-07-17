import React from "react";
import Card from "./Card";
import contacts from "../contact";


function createCard(contact){
  return <Card 
  key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.tel}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}
/*
In contacts form either use 
  <h1>...</h1> {contacts.map(createCard)}

  OR 

  <h1>...</h1> 
      <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
*/

export default App;