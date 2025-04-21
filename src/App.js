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
  const [theme, setTheme] = useState("");

  const localStorageMode = localStorage.getItem("theme");
  useEffect(() => {
    if (!theme && localStorageMode) {
      setTheme(localStorageMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

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

  return (
    <div className={theme === "dark" ? "dark-mode" : ""}>
      <div className="container">
        <Header theme={theme} handleToggleTheme={setTheme} />
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
