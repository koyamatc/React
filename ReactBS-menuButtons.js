require('./menu.css');
var React = require('react');
var Button = require('react-bootstrap').Button;
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;
var $ = require('jquery');
var uniqueId = require('uniqueid');

var labels = [
            'Programming',
            'JavaScript Libs',
            'Data visualization',
            'Benefit',
            'Bords',
            'Me & etc'
           ];
var me = [
      ["Profile","profile.html",""],
      ["Math","math/index.html","数学の復習です"],
      ["Statistics","stats/index.html","統計の学習です"],
      ["Physics","physics/index.html",""],
      ["My blog","../wordpress/",""],
      ["続酒とバラ肉","../sake_bara/","友人のブログ"]];
var dv = [
        ["Google Map","gmap/",""],
        ["D3.js","../d3/","Data-Driven Documens"],
        ["","",""],
        ["Visualizing Data","vd/",""],
        ["Mapbox","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["Natural Earth","",""]
      ];
var boards = [
        ["Raspberry Pi","../RasPi/",""],
        ["Arduino","####2",""]];
var jslibs = [
        ["jQuery","../jqlesson/jqlesson.html",""],
        ["jQuery UI","../jqui/jqui01.html",""],
        ["jQuery mobile","../lettering/",""],
        ["Bootstrap","../bootstrap/",""],
        ["knockout.js","../ko/","Dynamic JavaScript UI"],
        ["Processing.js","../processingJS/","ProcessingをJavaScriptで"],
        ["snapSVG.js","../snapSVG/","GoogleのSVG操作ﾗｲﾌﾞﾗﾘ"],
        ["lettering.js","../letteringjs/",""],
        ["underscore.js","../underscoreJS/",""],
        ["jsRender.js","../jsRender/","JavaScript template"],
        ["React.js","../react/","Facebookが開発したﾌﾚｰﾑﾜｰｸ"]
          ];

var benefits = [
      ["When can I use...","http://caniuse.com","ブラウザー間の互換性情報"],
      ["Color Picker","http://www.colorpicker.com/",""],
      ["","",""],
      ["","",""],
      ["","",""],
      ["","",""],
      ["MDN","https://developer.mozilla.org/ja/",""],
      ["ドットインストール","http://dotinstall.com/","３分間学習サイト"]
    ];
            
var pgms = [
      ["JavaScript","javascript/",""],
      ["php","php/php.html",""],
      ["processing","",""],
      ["scratch","",""],
      ["CSS","style/",""]
       ];
//** set menu items */
function setItem(arr){
  $("#btnAbout").hide();
  removeItem();
  for (var i = 0; i < arr.length; i++) {
    var item = "#item" + (i + 1);
    $(item).css("opacity","0");
    $(item).empty();
    
    var itemxs = "#itemxs" + (i + 1); 
    $(itemxs).css("opacity","0");
    $(itemxs).empty();

    var html = '<a class="btn btn-lg btn-block itemBtn' + '" href="' + arr[i][1] + '">' 
    + arr[i][0] +'<h5 class="text-pink hidden-xs">' + arr[i][2] + '</h5></a>'
    
    if (arr[i][0].length > 0) {

      $(item).append(html)
          .animate({opacity:0.8},"slow");
      $(itemxs).append(html)
          .animate({opacity:0.8},"slow"); 
    };
  };
};

//** Remove menu items */
function removeItem(){
  for (var i = 0; i < 13; i++) {
    var item = "#item" + (i + 1); 
    $(item).css("opacity","1");
    $(item).empty();

    var itemxs = "#itemxs" + (i + 1); 
    $(itemxs).css("opacity","1");
    $(itemxs).empty();
  };
};

// MenuButtons -> MenuButton

// MenuButton Component
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
      id:  React.PropTypes.string,
      label: React.PropTypes.string,
  }
  state = {
      id: this.props.id ? this.props.id : 'menuBtn-' + uniqueId('menuBtn-')
  }
  handleClick = (e) => {

     this.setState({selectedButton:e.target.id});

      switch (e.target.id) {
        case 'menuBtn-1': 
            setItem(pgms);
            break;
        case 'menuBtn-2': 
            setItem(jslibs);
            break;
        case 'menuBtn-3': 
            setItem(dv);
            break;
        case 'menuBtn-4':
            setItem(benefits);
            break;
        case 'menuBtn-5': 
            setItem(boards);
            break;
        case 'menuBtn-6': 
            setItem(me);
      };
  }
  render() {
    return (
        <Col sm={4} md={2}>
        <Button 
          bsStyle='info'
          bsSize='medium'
          block='true'
          id={this.state.id}
          key={this.state.id}
          onClick={this.handleClick}
        >
        {this.props.label}
        </Button>
        </Col>
    );
  }
}

// MenuButtons 
class MenuButtons extends React.Component {
  state = {
    selectedButton: null,
    labels: labels,
  }
  render() {
    var buttons = this.state.labels.map( (label,i) =>{
      return (
        <MenuButton label={label}>
        </MenuButton>
      );
    });
    return (
      <Row className="menu-row">
        {buttons}
      </Row>
    );
  }

}

module.exports = MenuButtons;