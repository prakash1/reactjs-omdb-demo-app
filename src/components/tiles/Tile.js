import React, { Component } from 'react';
import DetailsTile from "./DetailsTile";

class Tile extends Component {

    constructor(props){
        super(props);
        this.state = {
            details : false
        }
    }

    renderDetails = () => {
       this.setState({details:true});
    }


  render() {

    return (
        <div className="container">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
            <div className="media-left media-middle">
                <img alt="Not Available" src={this.props.value.Poster} className="media-object" style={{width:90}}/>
            </div>
            <div className="media-body">
                <table className="table table-condensed table-hover">
                    <tbody>
                    <tr>
                        <td><label>Title:</label></td>
                        <td>
                            <label>{this.props.value.Title}</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Year:</label></td>
                        <td>
                            <label>{this.props.value.Year}</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label>ImdbID:</label></td>
                        <td>
                            <label>{this.props.value.imdbID}</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Type:</label></td>
                        <td>
                            <label>{this.props.value.Type}</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="button" className="btn btn-primary"
                             onClick={this.renderDetails}>Details</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <div className="col-sm-4">
                {this.state.details && <DetailsTile imdbID={this.props.value.imdbID} />}
            </div>
        </div>
    );
  }
}

export default Tile;
