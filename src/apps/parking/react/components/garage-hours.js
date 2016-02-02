MyComponents.Hour = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <ul>
            <li>{'BEG: ' + this.props.hour.BEG }</li>
            <li>{'END: ' + this.props.hour.END}</li>
            <li>{'FROM: ' + this.props.hour.FROM}</li>
            <li>{'TO: ' + this.props.hour.TO}</li>
          </ul>
        </div>
      </div>
    );
  }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h3>Hour Information</h3>

          { hours }

        </div>
      </div>
    );
  }
});
