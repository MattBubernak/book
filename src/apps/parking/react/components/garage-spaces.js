MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Availability Information</h3>
          <ul>
            <li><b>{'Open Spots: '}</b>{ this.props.open}</li>
            <li><b>{'Total Spots: '}</b>{this.props.total}</li>
          </ul>
        </div>
      </div>
    );
  }
});
