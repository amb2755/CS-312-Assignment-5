import React from 'react'; // Import React to use JSX

// Define the Footer component
function Footer() {
    // Get the current year
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            {/* Display the current year dynamically */}
            <p>© {year}</p>
        </footer>
    );
}

export default Footer; // Export the Footer component as the default export

