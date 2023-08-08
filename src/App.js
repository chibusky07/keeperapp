import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function createNotes(myNotes) {
  return (
    <Note key={myNotes.id} title={myNotes.title} content={myNotes.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
