import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

// =======================
//   Component Styles
// =======================

const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const HeadlineDiv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const ImgDiv = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img {
    width: 40px;
  }
`;

// =======================
//     Components 
// =======================

const Card = props => {
  return (
    <CardDiv>
      <HeadlineDiv>{props.card.headline}</HeadlineDiv>
      <AuthorDiv>
        <ImgDiv>
          <img src={props.card.img} alt='card' />
        </ImgDiv>
        <span>By {props.card.author}</span>
      </AuthorDiv>
    </CardDiv>
  );
};

// ======================
//    Prop Types
// ======================

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
