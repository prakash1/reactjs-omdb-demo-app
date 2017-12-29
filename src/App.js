import React, { Component } from 'react';
import Header from "./components/headerComponent/Header"
import Footer from "./components/footerComponent/Footer"
import MoviesPage from "./components/pages/MoviesPage"
import AboutUs from "./components/pages/AboutUs"
import SeriesPage from "./components/pages/SeriesPage"
import "./index.css";
import { Route } from "react-router-dom";

class App extends Component {

  state = {
    searchText: ''
  }

  onChange = (searchText) => {
    this.setState({ searchText })
  }

  render() {

    const newProps = {
      searchText: this.state.searchText
    }

    // not using redux like lib. so this way of work around to pass data from one component to another
    return (
      <div>
       <Header onChange={this.onChange} />
       
       <Route path={"/"} exact render={props => {
         return <MoviesPage {...props} {...newProps} />
       }} />
      
       <Route path={"/movies"} exact render={props => {
         return <MoviesPage {...props} {...newProps} />
       }} />

       <Route path="/series" exact render={props => {
         return <SeriesPage {...props} {...newProps} />
       }} />
       <Route path="/about" exact component={AboutUs} />
       {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
