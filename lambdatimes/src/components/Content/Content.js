import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // console.log('CDM invoked')
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  selectTabHandler = tab => {
    return () => {
      this.setState({ selected: tab })
    }
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards
    } else {
      return this.state.cards.filter(card =>
        card.tab === this.state.selected)
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.selectTabHandler} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
