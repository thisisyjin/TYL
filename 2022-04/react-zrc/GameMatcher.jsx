import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import BullsAndCows from './BullsAndCows';
import RSP from './RSP';
import Lotto from './Lotto';

class GameMatcher extends Component {
  render() {
      const { name } = useParams();
      
    return (
      <>
        <BullsAndCows />
        <RSP />
        <Lotto />
      </>
    );
  }
}

export default GameMatcher;
