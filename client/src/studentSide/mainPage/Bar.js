import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Home from './Home';
import History from './History';
import Notifications from './Notifications';


function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="profile" title="Profile">
        <Home />
      </Tab>
      <Tab eventKey="history" title="History">
        <History/>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <Notifications/>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;