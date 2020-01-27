import React from 'react';
import Communities from './Communities';
import Show from './Show';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      communityName: ''
    };
  }
  handleShow = (value, name) => {
    this.setState({ show: value, communityName: name });
  };

  render() {
    return (
      <>
        <div className="web-app">
          {this.state.show ? (
            <Show
              handleShow={this.handleShow}
              communityName={this.state.communityName}
            />
          ) : (
            <Communities handleShow={this.handleShow} />
          )}
        </div>
      </>
    );
  }
}

export default App;
