MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper yellow">
        <a href="#" className="brand-logo black-text">Matt Bubernak</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down black-text">
          <li><a className="black-text" href="#skills-heading">Skills</a></li>
          <li><a className="black-text" href="#tasks-heading">Tasks</a></li>
          <li><a className="black-text" href="#cities-heading">Cities</a></li>          
        </ul>
        </div>
      </nav>
    );
  }
});
