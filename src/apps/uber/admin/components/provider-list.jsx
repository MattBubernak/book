class ProviderList extends React.Component {
  render(){
  

	var providers = this.props.providers.map(function(p, i){
	
		return (
      					<p>{p.name}</p>
				 );
	})
  
    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card">
		  <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src="http://www.thebigdir.com/img/cat/food-suppliers.jpg" height="350" ></img>
            </div>
            <div className="card-content" >
              <span className="card-title activator grey-text text-darken-4">Provider List<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Provider List<i className="material-icons right">close</i></span>
				{providers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyComponents.ProviderList = ProviderList
