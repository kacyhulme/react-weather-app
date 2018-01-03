var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (  
    <div>
    <h1 className="text-centered"> Examples Component </h1>
    <p>Here are a few Example Locations to try</p>
    <ol>
    <li>
    <Link to='/?location=Philadelphia'>Philadelphia,PA</Link>
    </li>
    <li>
    <Link to='/?location=Rio'>Rio, Brazil</Link>

    </li>
    <li></li>
    </ol>
    </div>
    )
}



module.exports = Examples;