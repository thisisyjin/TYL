// Rock Scissors Paper
import React, { Component } from 'react';

const rspCoords = {
  가위: '0',
  바위: '-142px',
  보: '-284px',
};

const scores = {
  이김: 1,
  비김: 0,
  짐: -1,
};

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: '0',
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => {};

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn('가위')}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
