MyComponents.Rate = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <ul>
            <li>{'Rate: $' + this.props.rate.RATE }</li>
            <li>{'START: ' + this.props.rate.BEG}</li>
            <li>{'END: ' + this.props.rate.END}</li>
            <li>{'DESC: ' + this.props.rate.DESC}</li>
            <li>{'RQ: ' + this.props.rate.RQ}</li>
            <li>{'RR: ' + this.props.rate.RR}</li>
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
