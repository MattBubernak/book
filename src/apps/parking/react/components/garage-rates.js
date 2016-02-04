MyComponents.Rate = React.createClass({
  render: function() {
    if (this.props.rate.BEG==undefined) {var beg = <li>{' '}</li>}
      else {var beg = <li>{'START: '+ this.props.rate.BEG}</li>}
    if (this.props.rate.END==undefined) {var end = <li>{' '}</li>}
      else {var end = <li>{'END: '+ this.props.rate.END}</li>}
    if (this.props.rate.DESC==undefined) {var desc = <li>{' '}</li>}
      else {var desc = <li>{'DESC: '+ this.props.rate.DESC}</li>}
    if (this.props.rate.RQ==undefined) {var rq = <li>{' '}</li>}
      else {var rq = <li>{'RQ: '+ this.props.rate.RQ}</li>}
    if (this.props.rate.RR==undefined) {var rr = <li>{' '}</li>}
      else {var rr = <li>{'RR: '+ this.props.rate.RR}</li>}

    return (
      <div className="card">
        <div className="card-content">
          <ul>
            <li>{'RATE: $' + this.props.rate.RATE}</li>
            {beg}
            {end}
            {desc}
            {rq}
            {rr}
          </ul>
        </div>
      </div>
    );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h3>Rate Information</h3>

          { rates }

        </div>
      </div>
    );
  }
});
