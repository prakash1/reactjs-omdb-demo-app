import React, { Component } from 'react';

class DetailsTile extends Component {

  baseAPi = "http://www.omdbapi.com/?apikey=2fbed419&i="

  constructor(props){
    super(props);
    this.state = {
        details : {}
    };
  }

  componentDidMount(){
    var self = this;
    var url = this.baseAPi+this.props.imdbID;
    fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(data){
        console.log(data);
        self.setState({
          details : data
        });
    })
  }


  render() {
    return (
        <div>
          <div>
            <table className="custom-table" >
              <tbody>
                <tr>
                  <td><label>Actors:</label></td>
                  <td><label>{this.state.details.Actors}</label></td>
                </tr>
                <tr>
                  <td><label>Country:</label></td>
                  <td><label>{this.state.details.Country}</label></td>
                </tr>
                <tr>
                  <td><label>Director:</label></td>
                  <td><label>{this.state.details.Director}</label></td>
                </tr>
                <tr>
                  <td><label>Language:</label></td>
                  <td><label>{this.state.details.Language}</label></td>
                </tr>
                <tr>
                  <td><label>Plot:</label></td>
                  <td><label>{this.state.details.Plot}</label></td>
                </tr>
                <tr>
                  <td><label>Writer:</label></td>
                  <td><label>{this.state.details.Writer}</label></td>
                </tr>
                <tr>
                  <td><label>Runtime:</label></td>
                  <td><label>{this.state.details.Runtime}</label></td>
                </tr>
                <tr>
                  <td><label>imdbRating:</label></td>
                  <td><label>{this.state.details.imdbRating}</label></td>
                </tr>
                <tr>
                  <td><label>imdbVotes:</label></td>
                  <td><label>{this.state.details.imdbVotes}</label></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default DetailsTile;
