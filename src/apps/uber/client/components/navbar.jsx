class NavBar extends React.Component {

  render(){
    return (
     <nav className = "black">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">Uber Cart</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Login</a></li>
        </ul>
		
      </div>
     </nav>		  
    );
  }

}
MyComponents.NavBar = NavBar
