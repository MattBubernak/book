MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      // <div className="card">
      //   <div className="card-content">
      //     <h3>Availability Information</h3>
      //     <ul>
      //       <li><b>{'Open Spots: '}</b>{ this.props.open}</li>
      //       <li><b>{'Total Spots: '}</b>{this.props.total}</li>
      //     </ul>
      //   </div>
      // </div>
      <div className="card black lighten">
        <div className="card-content white-text">
          <span className="card-title">Spaces</span>
          <ul className="collection black-text">
            <li className="collection-item">Open Spaces: {this.props.open}</li>
            <li className="collection-item">Total Spaces: {this.props.total}</li>
          </ul>
        </div>
      </div>
    );
  }
});
