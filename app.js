var React = require('react');
var MenuButtons = require('./ReactBS-menuButtons.js');
var Logo = require('./React-logo.js');

React.render(
	<Logo />,
	document.getElementById('logoContainer')
);
React.render(
	<MenuButtons />,
	document.getElementById('menuButtonsContainer')
);	

