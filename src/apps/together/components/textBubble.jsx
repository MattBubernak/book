class TextBubble extends React.Component {
  render(){
    console.log(this.props)

    var upVote = this.props.actions.upVoteMsg
    var downVote = this.props.actions.downVoteMsg
    var removeMessage = this.props.actions.removeMessage
    var isAdmin = this.props.isAdmin
    var divStyle = {};

    // Admin Button
    if (isAdmin != '1') {
      isAdmin = false 
    }
    else {
      isAdmin = true
    }


    var attachment;
    if(this.props.attachment) {
      attachment = 
        <div className="col s4 offset-s7">
          <div className="video-container">
            <iframe width="853" height="480" src={this.props.attachment} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      ;
    }
    else {
      attachment = <div/>;
    }

    return (
      <div className="chip textbubble">
        <div className="row">
          <div className="message">
            <img src={this.props.profilePic} alt="Contact Person"></img>
            {this.props.text}
          </div>
          <div className = "grey-text lighten-2">
            <span className="badge">
              {this.props.score}
              <a href="#" onClick={() => upVote(this.props.chatEntry)}><b>↑ </b></a>
              <a href="#" onClick={() => downVote(this.props.chatEntry)}><b> ↓</b></a>
              <a href="#" className={isAdmin ? '' : 'hidden'} onClick={() => removeMessage(this.props.chatEntry)}><b> X</b></a>
            </span>
          </div>
          {attachment}    
        </div>
      </div>
    );
  }
}
MyComponents.TextBubble = TextBubble
