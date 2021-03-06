MyComponents.City = React.createClass({

  render: function() {
    //<img src= {this.props.city.currently.icon} width=40px; height=40px></img>
    //div style="height:40px">
                  //<p style="font-size:15px">{this.props.city.daily.summary}</p>
                //</div>
    this.props.city.currently.icon = "img/" + this.props.city.currently.icon + ".png"
    return (
      <div className="card">
        <div className="card-content">
        <span className="card-title">{this.props.city.name.toUpperCase()} <img src= {this.props.city.currently.icon}/></span>

          <div className="col s6">
            <div className="card yellow ">
              <div className="card-content black-text">
                <h5>Daily Summary</h5>
                  <p>{this.props.city.daily.summary}</p>
                <h5>Current Info</h5>
                <ul>
                  <li><h6><b>Humidity:</b> {this.props.city.currently.humidity}%</h6></li>
                  <li><h6><b>Temperature:</b> {this.props.city.currently.temperature} deg</h6></li>
                  <li><h6><b>Conditions:</b> {this.props.city.currently.summary}</h6></li>
                  <li><h6><b>Wind:</b> {this.props.city.currently.windSpeed} mph</h6></li>
                  <li><h6><b>Precip Probability:</b> {this.props.city.currently.precipProbability}%</h6></li>
                  <li><h6><b>Nearest Storm:</b> {this.props.city.currently.nearestStormDistance} miles</h6></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        Check out the weather in my favorite cities!

        {cityElements}

        </div>
      </div>
    );
  }
});
