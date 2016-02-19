class App extends React.Component {
  render(){
    return <div>
	    <MyComponents.Needs actions={this.props.actions}/>
		<div className="card">
        <MyComponents.UserMap
            users={this.props.data.users}
            filters={this.props.data.filters}/>
      </div>

		<div className="card">
        <MyComponents.ProviderMap
            users={this.props.data.providers}
            filters={this.props.data.filters}/>
      </div>
	<MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>	  
    </div>

  }
}

MyComponents.App = App
