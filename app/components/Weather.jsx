// Container Component
var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function(location) {
    var that = this;

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      })
    }, function(errorMessage) {
      alert(errorMessage);
    })
  },
  render: function() {
    var {temp, location} = this.state;
    return (  
      <div>
      <h3> Weather Component </h3>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMessage temp={temp} location={location} />
      </div>
      )
  }
});

module.exports = Weather;