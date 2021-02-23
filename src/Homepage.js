import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    console.log("Homepage", this.props.parks);
    const parksList = this.props.parks.map((value,index) => 
        <div key={index}>
            <h2>{value.name}</h2>
            <Link to={`/park/${value.id}`}>
            <img src={value.images[0].url} />
            </Link>
        </div>
    )

    return (
        <div>
       
            <h1>this is homepage!</h1>
            {parksList}

        </div>
    );
  }
}



export default Homepage;