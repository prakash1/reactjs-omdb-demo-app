import React, { Component } from 'react';
import Tile from "../tiles/Tile";

class SeriesPage extends Component {

  baseApi = "http://www.omdbapi.com/?apikey=2fbed419&type=series&s=";
  defaultText = "aa";

  constructor(props) {
    super(props);
    this.state = {
      result : []
    };
  }

  componentDidMount(){
    this.callSeriesOMDbApi(this.defaultText);
  }

  componentWillReceiveProps(nextProps){
    this.callSeriesOMDbApi(nextProps.searchText);
  }

  callSeriesOMDbApi(searchText){
    var self = this;
    if(searchText === ""){
      searchText = self.defaultText;
    }
    var url = self.baseApi + searchText;
    fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(data){
      self.setState({result : data.Search});
    })
  }

  render() {
    if(!this.state.result) return <label>loading..</label>
    return (
          <div>
            {
              this.state.result.map((tiles) => {
                return (<Tile key={tiles.imdbId} value={tiles}/>);
              })
            }
          </div>
    );
  }
}

export default SeriesPage;
