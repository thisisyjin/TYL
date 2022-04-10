import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    results: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, results } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2sec-3sec 사이 랜덤으로
    } else if (state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 빠릅니다. 초록색이 된 후에 클릭하세요.',
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          results: [...prevState.results, this.endTime - this.startTime],
        };
      });
      console.log(this.startTime, this.endTime, this.state.results);
    }
  };

  onReset = () => {
    this.setState({
      results: [],
    });
  };

  renderAverage = () => {
    const { results } = this.state;
    return results.length === 0 ? null : (
      <>
        평균 시간:
        {results.reduce((prev, cur) => prev + cur) / results.length}
        ms
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
