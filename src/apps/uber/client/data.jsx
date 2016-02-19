// a single 'data' object that holds the data of your entire app, with initial values
var data = {
  center: {lat:40.701749, lon:-73.922}, // New York
  providers: [],
  user: null,
  filters: {"Pizza":0,"HotDog":0,"Tacos":0,"Burger":0,"IceCream":0}
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  ReactDOM.render(
    <MyComponents.App
        data={data}
        actions={actions}/>,
    $('#app-container').get(0)
  )
}

//
// DATA
//

var firebaseRef = new Firebase('https://team-roar.firebaseio.com')

// Real-time Data (load constantly on changes)
firebaseRef.child('providers')
  .on('value', function(snapshot){

    data.providers = _.values(snapshot.val())

    render()

  })

//
// ACTIONS
//

// Actions
actions.setUserLocation = function(latlng){

  if (data.user){
    firebaseRef
      .child('users')
      .child(data.user.username)
      .child('pos')
      .set([latlng.lat, latlng.lng])
  }
}

actions.login = function(){

  firebaseRef.authWithOAuthPopup("github", function(error, authData){

    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        name: authData.github.displayName,
        //username: authData.github.username,
        //id: authData.github.id,
        //status: 'online',
        pos: data.center,  // position, default to the map center
        interest: "Burger"
      }

      var userRef = firebaseRef.child('users').child(user.name)

      // subscribe to the user data
      userRef.on('value', function(snapshot){
        data.user = snapshot.val()
        render()
      })

      // set the user data
      userRef.set(user)

      // Display the user once logging in. 
      render()
    }
  })

}

actions.filterUpdateIceCream = function() {
  var filter = "IceCream"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateBurger = function() {
  var filter = "Burger"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateTacos = function() {
  var filter = "Tacos"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdatePizza = function() {
  var filter = "Pizza"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}
actions.filterUpdateHotDog = function() {
  var filter = "HotDog"
  data.filters[filter] == 1 ? data.filters[filter] = 0 :  data.filters[filter] = 1
  render()
}

actions.logout = function(){

  if (data.user){

    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('status').set('offline')

    data.user = null

    render()

  }

}
