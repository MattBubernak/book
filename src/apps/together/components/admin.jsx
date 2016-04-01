class AdminApp extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container ">
              <MyComponents.Users data = {this.props.data.adminInfo}/>
          </div>
      </div>
      );
  }
}

MyComponents.AdminApp = AdminApp
