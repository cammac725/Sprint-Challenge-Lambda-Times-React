import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

// =======================
//   Component Styles
// =======================

// =======================
//     Components 
// =======================

const Tab = props => {
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={props.selectTabHandler(props.tab)
      }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// ======================
//    Prop Types
// ======================

Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
