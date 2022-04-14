import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c); // 오름차순
  return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), // [...winNumbers, bonusNumber]
    winBalls: [],
    bonus: null,
    redo: false,
  };

  timeouts = [];

  runTimeouts = () => {
    const { winNumbers } = this.state;
    for (let i = 0; i < this.state.winNumbers.length - 1; i++) {
      // length - 1을 해서 마지막 보너스 공은 빼줌
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          const { winNumbers } = this.state;
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 500);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 3500);
  };

  componentDidMount() {
    this.runTimeouts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => clearTimeout(v));
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(), // [...winNumbers, bonusNumber]
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한번 더!</button>}
      </>
    );
  }
}

export default Lotto;
