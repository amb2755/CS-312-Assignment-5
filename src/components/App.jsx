import React, { useState } from 'react'; // Import useState to manage state
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import '../App.css';

function App() {
    const [notes, setNotes] = useState([]); // State to store notes
    const [title, setTitle] = useState(''); // State to store new note title
    const [content, setContent] = useState(''); // State to store new note content

    // Function to add a new note
    const addNote = () => {
        setNotes(prevNotes => [...prevNotes, { title, content }]);
        setTitle(''); // Clear title input
        setContent(''); // Clear content input
    };

    // Function to delete a note
    const deleteNote = (index) => {
        setNotes(prevNotes => prevNotes.filter((note, i) => i !== index));
    };

    return (
        <div className="App">
            <Header />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addNote();
                }}
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Add Note</button>
            </form>
            {notes.map((note, index) => (
                <Note
                    key={index}
                    index={index}
                    title={note.title}
                    content={note.content}
                    deleteNote={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
