const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet
class ProviderMap extends React.Component {
  render(){

    const userIcon = { 

    }


    const providerElements = this.props.users.map( function(u,i){

      var curIcon = L.icon({
        iconUrl: '../img/vendor/' + u.vendor + ".png",
<<<<<<< HEAD
        iconSize: [45, 45]});
      u.icon=curIcon;
=======
        iconSize: [45, 40]});
        u.icon=curIcon;
        u.pos={lat:40.701749,lon:-73.922}
>>>>>>> origin/master
      return <Marker position={u.pos} icon={u.icon}>
        <Popup>
          <span>{u.name}-{u.vendor} <br />
		  </span>
        </Popup>
      </Marker>
    })

    return (
      <div className="row">
        <div className="col s12">
          <div className="card black">
		  <h4>Provider Map</h4>
			<Map center={[40.701749, -73.922]} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
				{providerElements}
        {userIcon}
			  </Map>
          </div>
        </div>
      </div>

	)
  }

}

MyComponents.ProviderMap = ProviderMap
