import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

// =======================
//   Component Styles
// =======================

const TabDiv = styled.div`
  ${props => (props.tab === props.selectedTab ?
    `display : flex;
    justifyContent: none;
    alignItems: center;
    flexDirection: row;
    margin: 0 5px;
    padding: 2px 10px;
    fontSize: 12px;
    letterSpacing: 2px;
    cursor: pointer;
    fontWeight: bold;
    backgroundColor: #fff;
    color: #333;
    border: 2px solid #333;
    &:hover {
      text-decoration: underline;
    }`
    :
    `display : flex;
    justifyContent: none;
    alignItems: center;
    flexDirection: row;
    margin: 0 5px;
    padding: 2px 10px;
    fontSize: 12px;
    letterSpacing: 2px;
    cursor: pointer;
    fontWeight: bold;
    backgroundColor: #333;
    color: #fff;
    border: none;
    &:hover {
      text-decoration: underline;
    }`
  )}
`;

// =======================
//     Components 
// =======================

const Tab = props => {
  return (
    <TabDiv
      onClick={props.selectTabHandler(props.tab)
      }
    >
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};

// ======================
//    Prop Types
// ======================

Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
