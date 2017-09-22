class CreateLabel extends React.Component {
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
    var text = document.getElementById("label_name").value;
    if( text != "" ){
      document.getElementById("label_name").value = "";
    }
    event.preventDefault();
    var data = {};
    data['text'] = text;
    $.ajax({
      url: "./api/labels.pl",
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  }
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-12">
            </div>
            <div className="col-xs-12">
              <div className="input-group">
                <input id="label_name" type="text" className="form-control" placeholder="Input Label Name..." onKeyPress={this.handleEnter} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSubmit} >Create!</button>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
ReactDOM.render(
  <CreateLabel />,
  document.getElementById('create_label')
);
