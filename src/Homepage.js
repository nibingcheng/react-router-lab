import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    console.log("Homepage", this.props.parks);
    const parksList = this.props.parks.map((value,index) => 
        <div className="listOfImages" key={index}>
            <p>{value.name}</p>
            <Link to={`/park/${value.id}`}>
            <img src={value.images[0].url} alt={value.altText}/>
            </Link>
        </div>
    )

    return (
        <div className="mainArea">
       
            {/* <h1>this is homepage!</h1> */}
            {parksList}

        </div>
    );
  }
}



export default Homepage;