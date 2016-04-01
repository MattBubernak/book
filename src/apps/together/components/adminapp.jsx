class AdminApp extends React.Component {
  render(){
    console.log("this.props.data:")
    console.log(this.props.data)
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <MyComponents.AdminInfo data={this.props.data} actions={this.props.actions}/>
      </div>
      );
  }
}

MyComponents.AdminApp = AdminApp
