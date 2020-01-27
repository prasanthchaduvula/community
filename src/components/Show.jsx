import React from 'react';
import data from './data.json';
class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleInc = () => {
    var { communityName } = this.props;
    if (this.state.value < data[communityName].length - 1) {
      this.setState({ value: this.state.value + 1 });
    } else {
      this.props.handleShow(false);
    }
  };
  handleDec = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    } else {
      this.props.handleShow(false);
    }
  };
  render() {
    var { arr, value } = this.state;
    var { communityName } = this.props;
    var story = data[communityName];
    return (
      <>
        <div className="story-card" id={`rrr${value}`}>
          <div className="story-top">
            <div className="story-bar-wrapper">
              <p className="story-bar"></p>
            </div>
            <div className="story-profile">
              <img className="story-profile-pic" src={story[value].dp} alt="" />
              <p className="story-profile-name">{story[value].name}</p>
            </div>
          </div>
          <div className="story-cont">
            {story[value].body ? (
              <img className="story-img" src={`${story[value].body}`} alt="" />
            ) : (
              <p className="story-text">{story[value].text}</p>
            )}
          </div>

          <p onClick={this.handleInc} className="right-click"></p>
          <p onClick={this.handleDec} className="left-click"></p>
        </div>
      </>
    );
  }
}

export default Show;
