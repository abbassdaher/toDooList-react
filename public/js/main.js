"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      products: [],
      item: ""
    };
    _this.changeItemValue = function (e) {
      _this.setState({
        item: e.target.value
      });
    };
    _this.onSubmitForm = function (e) {
      e.preventDefault();
      var products = [].concat(_toConsumableArray(_this.state.products), [_this.state.item]);
      _this.setState({
        products: products
      });
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log(this);
      return React.createElement(
        "div",
        { className: "App" },
        this.state.item,
        React.createElement(Header, null),
        React.createElement(AddItem, { changeItemValue: this.changeItemValue, onSubmitForm: this.onSubmitForm }),
        console.log(this.state.products)
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(this);
      return React.createElement(
        "header",
        null,
        "ToDoo-List"
      );
    }
  }]);

  return Header;
}(React.Component);

var Items = function (_React$Component3) {
  _inherits(Items, _React$Component3);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return Items;
}(React.Component);

var AddItem = function (_React$Component4) {
  _inherits(AddItem, _React$Component4);

  function AddItem() {
    _classCallCheck(this, AddItem);

    return _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this));
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.props.onSubmitForm },
        React.createElement("input", { type: "text", onChange: this.props.changeItemValue }),
        React.createElement(
          "button",
          { type: "submit" },
          "AddItem"
        )
      );
    }
  }]);

  return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
