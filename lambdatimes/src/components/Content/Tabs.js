import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  // console.log('tabs', props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map((item, index) =>
          <Tab
            tabs={props.tabs}
            tab={item}
            key={index}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

