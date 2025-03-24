import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import FadingHeader from './components/FadingHeader';
import './App.css';

const App = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="App">
            <Sidebar toggleSidebar={toggleSidebar} isVisible={isSidebarVisible} />
            <FadingHeader />
            <main>
                <Content toggleSidebar={toggleSidebar} />
            </main>
            {/* Footer removed as per request */}
        </div>
    );
};

export default App;
