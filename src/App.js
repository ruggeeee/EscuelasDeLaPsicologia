import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="App">
            {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
            <header>
                <h1>Facultades de la Psicología</h1>
            </header>
            <main>
                <Content toggleSidebar={toggleSidebar} />
            </main>
            <footer>
                <p>&copy; 2025 Proyecto Facultativo</p>
            </footer>
        </div>
    );
};

export default App;
