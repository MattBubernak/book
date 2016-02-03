MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Parking Project</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="garages.html">Garages</a></li>
        <li ><a href="team.html">Team Members</a></li>


         // <li><a href="sass.html">Sass</a></li>
         // <li><a href="badges.html">Components</a></li>
         // <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        </div>
      </nav>

      <style>
      html {
        background: url(Free_Parking.jpg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    </style>
    
    );
  }
});
