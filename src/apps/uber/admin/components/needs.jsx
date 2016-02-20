class Needs extends React.Component {
    render() {
        return <div id="needs">
            <h4>What are you looking for?</h4>
			<i> Click on the items below to enable filters. </i>
            <form action="#">
                <ul id="items">
                    <div className="row">
						<div className="col s2"> 
						<input onChange={this.props.actions.filterUpdateBurger} type="checkbox" id="s1" />
                        <label htmlFor="s1">Burgers</label>
						</div>

						<div className="col s2"> 
                        <input onChange={this.props.actions.filterUpdateHotDog} type="checkbox" id="s2" />
                        <label htmlFor="s2">Hot Dogs</label>
						</div>
						<div className="col s2"> 
                        <input onChange={this.props.actions.filterUpdateIceCream} type="checkbox" id="s3" />
                        <label htmlFor="s3">Ice Cream</label>
						</div>
						<div className="col s2"> 
                        <input onChange={this.props.actions.filterUpdatePizza} type="checkbox" id="s4" />
                        <label htmlFor="s4">Pizza</label>
						</div>
						<div className="col s2"> 
                        <input onChange={this.props.actions.filterUpdateTacos} type="checkbox" id="s5" />
                        <label htmlFor="s5">Tacos</label>
						</div>
                    </div>
                </ul>
            </form>
        </div>;
    }
}

MyComponents.Needs = Needs;
