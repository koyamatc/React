require('./React-logo.css');
var React = require('react/addons');
var $ = require('jquery');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var data = ['k','o','y','a','m','a','t','c','h','.','c','o','m'];

class Logo extends React.Component {
  state = {
    characters:data,
  }
  render() {
    var characters = this.state.characters.map( (char,i)=>{
      var classNM = 'logoChar' + i;
      var transNM = 'logoTrans' + i;
      return (
        <ReactCSSTransitionGroup transitionName={transNM}>
        <span id={classNM} key={classNM} className={classNM}>{char}</span>
        </ReactCSSTransitionGroup>
      );
    });
    return (
      <div id="logo" className='text-center'>
        {characters}
      </div>
    );
  }

};

module.exports = Logo;