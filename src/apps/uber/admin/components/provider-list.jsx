class ProviderList extends React.Component {
  render(){
    return <div>
      <div>ToDo: List of Providers how to read read as this. props.providers.name
        <pre>{JSON.stringify(this.props.providers)}</pre>
      </div>
    </div>
  }
}

MyComponents.ProviderList = ProviderList
