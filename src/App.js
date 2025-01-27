import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;

