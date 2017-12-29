import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class MyHeader extends Component {

  constructor(props){
    super(props);
    this.state = {
        showSearchModal : false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //old way of doing. So required to bind with this.
  handleKeyPress(event) {
      if(event.key === 'Enter'){
          // code goes here.
      }
  }

  //using arrow not required to bind with this.
  textChange = (evt) => {
    this.props.onChange(evt.target.value)
  }

  render() {
    return (
      <header>
          <nav className="navbar navbar-inverse override-background-colour header-height">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand font-color" to="/movies">OMDb - A repository of movies & series</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link className="Active" to="/movies">Movies</Link></li>
                  <li><Link to="/series">Series</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
                <form className="navbar-form navbar-right">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="search title in OMDb"
                         onChange={this.textChange} />
                    </div>
                </form>
              </div>
          </nav>
      </header>
    );
  }
}

export default MyHeader;
