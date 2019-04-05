import React from 'react';

import Tab from './Tab';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// =======================
//   Component Styles
// =======================

// const TabsDiv = styled.div`
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;
//   @media (min-width: 1280px) {
//     width: 1280px;
//   }
// `;

// const TopicsDiv = styled.div`
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
// `;

// const TitleSpan = styled.span`
//   font-size: 12px;
//   letter-spacing: 1px;
//   font-weight: bold;
// `;

// =======================
//     Components 
// =======================

const Tabs = props => {
  return (
    <div className='tabs'>
      <div className='topics'>
        <span className='title'>TRENDING TOPICS:</span>

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

// ======================
//    Prop Types
// ======================

Tabs.propTypes = {
  tabs: PropTypes.array
}

export default Tabs;

