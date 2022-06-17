import React from "react";

const ReactContact = () => {
    return (
       <>
      <h1>this is a first react firebase crud app</h1>
      <hr></hr>
      <p>The crud operation stands for create, read, update and delete. Here we use firestore as our database and react is used to create the front end.</p>
      <form>
      <label>Enter the lesson:
        <input type="text" />
      </label>
      <label>Enter the link:
        <input type="text" />
        </label> 
    </form>
    <button>Make a new directory</button>
       </> 
    );
}

export default ReactContact;