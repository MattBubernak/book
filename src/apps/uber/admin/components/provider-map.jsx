const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet
class ProviderMap extends React.Component {
  render(){

    const providerElements = this.props.users.map( function(u,i){
      return <Marker position={u.pos} >
        <Popup>
          <span>{u.name}-{u.vendor} <br />
		  {u.serviceTime}</span>
        </Popup>
      </Marker>
    })
    
    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card">
		  <h4>Provider Map</h4>
			<Map center={[37.78, -122.41]} zoom={13}>
				<TileLayer
				  attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
				   url='https://api.tiles.mapbox.com/v4/doubleshow.noeko77m/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q' 
				/>
				{providerElements}

			  </Map>
          </div>
        </div>
      </div>	

	)
  }
  
}

MyComponents.ProviderMap = ProviderMap
