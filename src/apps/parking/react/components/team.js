MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
      return <li key={i} className="collection-item">
              <a className="white" href={'http://github.com/' +  member.githubid}><span className="chip blue">{member.fname + ' ' + member.lname}</span></a>
            </li>
    })

    return (
      <div className="card">

        <div className="card-content">
          <div>
            TODO: This is a component to display the info about our team
            raw props data is {JSON.stringify(this.props)}
          </div>
          <span className="card-title">Team Members</span>
          <div className="collection">
            {members}
          </div>
        </div>
      </div>
    );
  }
});
