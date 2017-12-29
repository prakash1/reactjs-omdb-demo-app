import React, { Component } from 'react';
import Tile from "../tiles/Tile";

class MoviesPage extends Component {

  baseApi = "http://www.omdbapi.com/?apikey=2fbed419&type=movie&s=";
  defaultText = "aa";


  constructor(props) {
    super(props);
    this.state = {
      result : []
    }
  }

  componentDidMount(){
    this.callMoviesOMDbApi(this.defaultText);
  }

  componentWillReceiveProps(nextProps){
      this.callMoviesOMDbApi(nextProps.searchText);
  }

  //method can be improved.
  callMoviesOMDbApi(text){
    var self = this;
    if(text === ""){
      text = self.defaultText;
    }
    var url = self.baseApi + text;
    fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(data){
      self.setState({result : data.Search});
    })
  }

  filterResults(nextProps){
    if (nextProps.searchText !== this.props.searchText) {
      this.setState({
        result: this.state.results.filter(r => r.Title.toLowerCase().indexOf(nextProps.searchText.toLowerCase()) !== -1)
      })
    }
  }

  render() {
    if(!this.state.result) return <label>loading..</label>
    return (
          <div className="container">
            {
              this.state.result.map((tiles) => {
                return (<Tile key={tiles.imdbID} value={tiles} />);
              })
            }
          </div>
    );
  }
}

export default MoviesPage;
