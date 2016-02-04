MyComponents.Hour = React.createClass({
  render: function() {
    if (this.props.hour.BEG==undefined) {var beg = <li>{' '}</li>}
      else {var beg = <li>{'START: '+ this.props.hour.BEG}</li>}
    if (this.props.hour.END==undefined) {var end = <li>{' '}</li>}
      else {var end = <li>{'END: '+ this.props.hour.END}</li>}
    if (this.props.hour.FROM==undefined) {var from = <li>{' '}</li>}
      else {var from = <li>{'FROM: '+ this.props.hour.FROM}</li>}
    if (this.props.hour.TO==undefined) {var to = <li>{' '}</li>}
      else {var to = <li>{'TO: '+ this.props.hour.TO}</li>}

    return (
      <div className="card">
        <div className="card-content">
          <ul>
          {beg}
          {end}
          {from}
          {to}
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
