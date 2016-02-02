MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.title}</h1>          
        </div>
      </div>
    );
  }
});
