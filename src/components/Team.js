import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
  constructor(props) {
      super(props);
  }  


  render() {

    return (
        <div className="team row col-12 pt-2 ml-2 pl-0">
            <span className="col-2">
                <img className="countryFlag" src={this.props.team.flag} alt="country flag"/>
            </span>
            <span className="col-8 teamName">
                {this.props.team.name}
                <span className="col-1 teamOverall">
                    {this.props.team.overall}
                </span>
            </span>
            
            <span className="col-2 teamPoint">
                {this.props.team.point}
            </span>
        </div> 
    );
  }
}

export default Team;
