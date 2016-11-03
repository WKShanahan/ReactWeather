var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Information About the React Weather App</h1>
      <p>This is a Weather Application built with the React platform.  It will return the current
      temperature in Fahrenheit for any city entered.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
