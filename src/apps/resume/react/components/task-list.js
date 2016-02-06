MyComponents.Task = React.createClass({

  render: function() {
    console.log(this.props.task)
    if (this.props.task.priority == "High") return (
      <div className="card hoverable red lighten-1">
        <div className="card-content center-align black-text">
          <span className="card-title collection-item task.priority "> {this.props.task.title}</span>
            <p>
              Deadline: {this.props.task.deadline} 
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
            </p>
            <div className="chip"> {this.props.task.assigned} </div>
        </div>     
      </div>
    );
    else if (this.props.task.priority == "Medium") return (
      <div className="card hoverable yellow lighten-1">
        <div className="card-content center-align black-text">
          <span className="card-title collection-item task.priority "> {this.props.task.title}</span>
            <p>
              Deadline: {this.props.task.deadline} 
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
            </p>
            <div className="chip"> {this.props.task.assigned} </div>
        </div>     
      </div>
    );
    else if (this.props.task.priority == "Low") return (
      <div className="card hoverable light-green lighten-1">
        <div className="card-content center-align black-text">
          <span className="card-title collection-item task.priority "> {this.props.task.title}</span>
            <p>
              Deadline: {this.props.task.deadline} 
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
            </p>
            <div className="chip"> {this.props.task.assigned} </div>
        </div>     
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        <span class="card-title">These tasks have been assigned to me!</span>

        {taskElements}

        </div>
      </div>
    );
  }
});
