MyComponents.Skill = React.createClass({

  render: function() {
    return (
        <li>
        <b>{this.props.skill.name}</b>
        <br>Years: {this.props.skill.years}</br>
        </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">

        <div className="card-content">
        <span class="card-title">I have many Uber Skillz!</span>
        <ul>
        {skillElements}
        </ul>
        </div>
      </div>
    );
  }
});
