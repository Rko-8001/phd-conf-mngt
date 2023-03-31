import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Home from './Home';
import History from './History';
import Notifications from './Notifications';
import Contact from './Contact';
import StudentDashboard from "./StudentDashboard";


const TabComponent = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <Tabs activeKey={activeTab} onSelect={handleTabSelect}>
      <Tab eventKey="tab1" title="Home">
        <StudentDashboard studentEmail={props.studentEmail}/>
      </Tab>
      <Tab eventKey="tab2" title="History">
        <History email={props.studentEmail}/>
      </Tab>
      <Tab eventKey="tab3" title="Notifications">
        <Notifications/>
      </Tab>
      <Tab eventKey="tab4" title="Contact">
        <Contact />
      </Tab>
    </Tabs>
    </div>
  );
};

export default TabComponent;