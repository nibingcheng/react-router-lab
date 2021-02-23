import React, { Component } from 'react';

class Show extends Component {

    render() {
      
      let parkId = this.props.match.params.id;
      let parkData = this.props.parks.find(value => 
            value.id === parkId 
          )
        
      if (parkData !== undefined) { 
            this.parkImages = parkData.images.map((value,index) => 
            <img key={index} src={value.url} />            
            )
      };  
      return (
          <div>         
            <h1>this is show page!</h1>
            
            {parkData ?  
                <div>
                    <h3>{parkData.name}</h3>
                    <p>{parkData.description}</p>
                    <h3>Address</h3>
                    <div>{parkData.addresses[0].line1}</div>
                    <div>
                        {parkData.addresses[0].city}, {parkData.addresses[0].stateCode} {parkData.addresses[0].postalCode}
                    </div>
                    
                    <div>
                        <img src={parkData.images[0].url} />
                    </div>
                    
                    {this.parkImages}
                    
                    <h3>Directions</h3>
                    <div>{parkData.directionsInfo}</div>
                    <div id="read-more">
                        <a href={parkData.url}>
                        Read More
                        </a>
                    </div>
                    <div>
                        <p>National Park Service</p>
                        <p>U.S. Department of the Interior</p>
                    </div>
                </div>
            : null
            }
          </div>
      );
    }
  }

export default Show;