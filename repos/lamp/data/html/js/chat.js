class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      comment: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleEnter(event) {
    if(event.key == 'Enter'){
      this.handleSubmit(event);
    }
  }
  handleSubmit(event) {
    var text = document.getElementById("chat_text").value;
    if( text != "" ){
      //socket.emit('send_to_all',{value:text});
      document.getElementById("chat_text").value = "";
    }
    event.preventDefault();
  }
  componentDidMount(){
    /*
    socket.on("send_to_all", (data) => {
      this.writeBoard(data);
    })
    */
  }
  writeBoard(data){
    var comment = this.state.comment
    comment.unshift(data.value)
    if(comment.length > 30){
      comment.pop();
    }
    this.setState({
      comment:comment
    });
  }
  render() {
    const board = [];
    for(var index in this.state.comment){
      var now_date = this.state.comment[index]['date'];
      board.push(<tr key={index}><td>{now_date}</td><td>{this.state.comment[index]['text']}</td></tr>);
    }
    return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-3 bg-success r-box">あああ</div>
                </div>
                <div className="row">
                  <div className="col-xs-9 col-xs-pull-3"></div>
                  <div className="col-xs-3 bg-success r-box col-xs-push-9">あああ</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>chat</th>
                  <th>text</th>
                </tr>
              </thead>
              <tbody>
                {board}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="input-group">
                <input id="chat_text" type="text" className="form-control" placeholder="Speech for..." onKeyPress={this.handleEnter} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSubmit} >Send!</button>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
ReactDOM.render(
  <Chat />,
  document.getElementById('chat')
);
