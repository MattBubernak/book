const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet

class User extends React.Component {

  render(){

    if (this.props.user){

      // user is authenticated
      var curIcon = L.icon({
      iconUrl: "../img/vendor/Burger.png",
      iconSize: [45, 45]});
      var userIcon =curIcon;
      var userPos = this.props.user.pos;
      var userName = this.props.user.displayName;


      return <div>
    <h5 className="left-align">Hello {this.props.user.displayName}!</h5>
    <a href="#" onClick={this.props.logoutAction}>Logouts</a>
    <Marker position={userPos} icon={userIcon}><Popup><span>{userName} <br /></span></Popup></Marker></div>
} else {
// user is not set
return <div>
  <h5 className="left-align">You are not logged in yet.</h5>
  <a href="#" onClick={this.props.loginAction}>Login via Github</a>
      </div>
    }
  }

}
MyComponents.User = User
