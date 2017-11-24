var GreeterMessage = React.createClass({

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return(
      <div>
      <h1>Hello</h1>
      <p>{name}</p>
      <p>{message}</p>
      </div>
      );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },

  render: function() {
    return(
      <div>
      <form onSubmit={this.onFormSubmit}>
      <div><input type="text" ref="name" placeholder="Enter name"/></div>
      <div><textarea ref="message" placeholder="Enter message"/></div>
      <div><button>Submit</button></div>
      </form>
      </div>
      )
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'World-default',
      message: 'Greta loves dinner-default'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates) {

    this.setState(updates)
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
      <GreeterMessage name={name} message={message}/>
      <GreeterForm onNewData = {this.handleNewData}/>

      </div>
      );
  }
});

var babyName = "Baby Greta";
var babyMessage = "Baby Says: Where is breakfast and dinner";

ReactDOM.render(
  <Greeter name={babyName} message={babyMessage}/>,
  document.getElementById('app')
  );