import Note from "./components/Note";
import { useState } from "react";
import loginService from "./services/login";
import noteService from "./services/noteService";
const App = ({ notes }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newNote, setNewNote] = useState("");
  const [user, setUser] = useState(null);
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
  const addNote = async (event) => {
    event.preventDefault();
    if (newNote.length < 5) {
      console.log("Note content must be at least 5 characters long");
      return;
    }
    try {
      const savedNote = await noteService.create({
        content: newNote,
        important: true,
      });
      console.log("note saved: ", savedNote);
    } catch (error) {
      console.log(error);
    }
    console.log("Note added");
  };
  const noteForm = () => (
    <form onSubmit={addNote}>
      <input
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
      <button type="submit">save</button>
    </form>
  );
  const handleLogin = async (event) => {
    console.log("button clicked");
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log("error occuredin logging ");
    }
  };

  return (
    <div>
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>{user.name} logged-in</p>
          {noteForm()}
        </div>
      )}
      <h1>Notes</h1>

      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
