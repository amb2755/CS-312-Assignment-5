import React from 'react'; // Import React to use JSX

// Define the Note component
function Note({ title, content, deleteNote, index }) {
    return (
        <div className="note">
            {/* Display the note title */}
            <h1>{title}</h1>
            {/* Display the note content */}
            <p>{content}</p>
            {/* Button to delete the note */}
            <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
    );
}

export default Note; // Export the Note component as the default export

