import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (    
    <div>
    <ul className="nav nav-tabs">
      {tabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <button 
            className={`nav-link ${index === activeTab ? 'active' : ''}`} 
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>

    <div className="tab-content">
      {tabs.map((tab, index) => (
        <div 
          key={index} 
          className={`tab-pane ${index === activeTab ? 'active' : ''}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  </div>
);
}


  function App() {
    const tabData = [
      { label: 'Tab 1', content: <div>Content for Tab 1</div> },
      { label: 'Tab 2', content: <div>Content for Tab 2</div> },
      { label: 'Tab 3', content: <div>Content for Tab 3</div> }
    ];
    return (
      <div>
        <Tabs tabs={tabData} />
      </div>
    );
  }
  
const rootelement = document.getElementById('root');
const root = ReactDOM.createRoot(rootelement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);