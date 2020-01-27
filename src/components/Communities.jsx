import React from 'react';
import Show from './Show';
class Communities extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      communities: [
        { logo: '/altcampus/altcampus.jpg', name: 'Altcampus' },
        { logo: '/upsc/upsc.jpeg', name: 'Upsc' },
        { logo: '/travel/travel.JPG', name: 'Travel' },
        { logo: 'altcampus/prasanth_story.JPG', name: 'My village' },
        { logo: 'altcampus/ravi_story.JPG ', name: 'Family' },
        { logo: 'altcampus/music.jpeg', name: 'Music' },
        { logo: 'altcampus/suraj_story.JPG ', name: 'Friends' },
        { logo: 'altcampus/cse.jpeg', name: 'Cse branch' }
      ],
      allcommunities: [
        { logo: '/altcampus/altcampus.jpg', name: 'Altcampus' },
        { logo: '/upsc/upsc.jpeg', name: 'Upsc' },
        { logo: '/travel/travel.JPG', name: 'Travel' },
        { logo: 'altcampus/prasanth_story.JPG', name: 'My village' },
        { logo: 'altcampus/ravi_story.JPG ', name: 'Family' },
        { logo: 'altcampus/music.jpeg', name: 'Music' },
        { logo: 'altcampus/suraj_story.JPG ', name: 'Friends' },
        { logo: 'altcampus/cse.jpeg', name: 'Cse branch' }
      ],
      filterCommunity: ''
    };
  }

  handleSearch = event => {
    if (event.target.value) {
      console.log('hi', event.target.value);
      this.state.communities.map(community =>
        community.name == event.target.value
          ? this.setState({ communities: [community] })
          : ''
      );
    } else {
      this.setState({ communities: this.state.allcommunities });
    }
  };

  // handleClick = () => {
  //   this.setState({ show: true });
  //   if (this.state.show) {
  //     console.log('called');
  //     return <Show />;
  //   }
  // };
  render() {
    var { communities } = this.state;
    return (
      <>
        <div className="communities-section">
          <div className="community-search-wrapper">
            <input
              className="community-search"
              type="text"
              name=""
              placeholder="Search your community"
              onChange={this.handleSearch}
            />
          </div>
          {/* <p className="communities-heading">Welcome to Communities</p> */}
          {communities.map(community => (
            <div
              onClick={() => this.props.handleShow(true, community.name)}
              className="communities-wrapper"
            >
              <img className="communities-logo" src={community.logo} alt="" />
              <p className="communities-name">{community.name}</p>
            </div>
          ))}
        </div>
        <div className="post-btn">+</div>
      </>
    );
  }
}

export default Communities;
