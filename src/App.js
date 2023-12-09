import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app-data")) || []
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    console.log("delete note id" + id);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
