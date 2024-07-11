import React from 'react'; // Import React to use JSX
import ReactDOM from 'react-dom'; // Import ReactDOM to render the app
import './index.css'; // Import global CSS styles
import App from './components/App'; // Import the App component

// Render the App component into the root element in index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Find the root element in public/index.html
);

