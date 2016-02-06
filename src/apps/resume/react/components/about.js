MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s2">
              <div class="row about-me-face">
                  <img src="img/face3.jpg" class="img-circle" alt="Cinque Terre" width="150" height="150"/>
              </div>
              
            </div> 
            <div className="col s5">
              <ul>
                <li><b>Name:</b> Matt Bubernak</li>
                <li><b>Major:</b> Computer Science</li>
                <li><b>Year:</b> 5th Year MS/BS</li>
                <li><b>Birth Place:</b> California</li>
                <li><b>Favorite Color:</b> Yellow</li>
                <li><b>Github URL:</b> <a href="https://github.com/MattBubernak">www.github.com/MattBubernak</a></li>
              </ul>
            </div>
            <div className="col s3">
              
            </div>
          </div>  
        </div>
      </div>
    );
  }

});
