import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Show extends Component {

    render() {
      
      let parkId = this.props.match.params.id;
      let parkData = this.props.parks.find(value => 
            value.id === parkId 
          )
        
      if (parkData !== undefined) { 
            this.parkImages = parkData.images.map((value,index) => 
            <img className="showPageImages" key={index} src={value.url } alt={value.altText}/>            
            )
      };  
      return (
          <div className="showPageContainer">         
            
            {parkData ?  
                <div>
                    <div>
                        <img className="showPageLgImg" src={parkData.images[0].url} alt={parkData.images[0].altText}/>
                    </div>
                    <div className="parkNameDescription">
                    <h3>{parkData.name}</h3>
                    <p>{parkData.description}</p>
                    </div>
                    <h3>Address</h3>
                    <div>{parkData.addresses[0].line1}</div>
                    <div>
                        {parkData.addresses[0].city}, {parkData.addresses[0].stateCode} {parkData.addresses[0].postalCode}
                    </div>
                    
                    <p>Images</p>
                    <div>
                        {this.parkImages}
                    </div>
                    <h3>Directions</h3>
                    <div>{parkData.directionsInfo}</div>
                    <div id="read-more">
                        <a href={parkData.url}>
                        Read More
                        </a>
                    </div>
                    <Link to={`/`}><p className="back2ParkList">Back to Park List</p></Link>
                </div>
            : null
            }
          </div>
      );
    }
  }

export default Show;