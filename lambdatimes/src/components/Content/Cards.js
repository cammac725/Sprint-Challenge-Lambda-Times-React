import React from 'react';

import Card from './Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// =======================
//   Component Styles
// =======================

const CardsDiv = styled.div`
   display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

// =======================
//     Components 
// =======================

const Cards = props => {
  return (
    <CardsDiv>
      {props.cards.map((item, index) =>
        <Card
          card={item}
          key={index}
        />
      )}
    </CardsDiv>
  )
}

// ======================
//    Prop Types
// ======================

Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;