(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-final-form')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-final-form'], factory) :
  (global = global || self, factory(global['react-final-form-listeners'] = {}, global.React, global.ReactFinalForm));
}(this, function (exports, React, reactFinalForm) { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var ExternallyChangedState =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ExternallyChangedState, _React$Component);

    function ExternallyChangedState(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        previous: props.input.value,
        externallyChanged: false
      };
      return _this;
    }

    var _proto = ExternallyChangedState.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props = this.props,
          value = _this$props.input.value,
          active = _this$props.meta.active;
      var previous = this.state.previous;

      if (value !== previous) {
        this.setState({
          previous: value,
          externallyChanged: !active
        });
      }
    };

    _proto.render = function render() {
      return this.props.children(this.state.externallyChanged);
    };

    return ExternallyChangedState;
  }(React.Component);

  var ExternallyChanged = function ExternallyChanged(_ref) {
    var name = _ref.name,
        children = _ref.children;
    return React.createElement(reactFinalForm.Field, {
      name: name,
      subscription: {
        active: true,
        value: true
      },
      allowNull: true,
      render: function render(props) {
        return React.createElement(ExternallyChangedState, _extends({}, props, {
          children: children
        }));
      }
    });
  };

  var OnBlurState =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(OnBlurState, _React$Component);

    function OnBlurState(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        previous: !!props.meta.active
      };
      return _this;
    }

    var _proto = OnBlurState.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props = this.props,
          children = _this$props.children,
          active = _this$props.meta.active;
      var previous = this.state.previous;

      if (previous && !active) {
        children();
      }

      if (previous !== active) {
        this.setState({
          previous: active
        });
      }
    };

    _proto.render = function render() {
      return null;
    };

    return OnBlurState;
  }(React.Component);

  var OnBlur = function OnBlur(_ref) {
    var name = _ref.name,
        children = _ref.children;
    return React.createElement(reactFinalForm.Field, {
      name: name,
      subscription: {
        active: true
      },
      render: function render(props) {
        return React.createElement(OnBlurState, _extends({}, props, {
          children: children
        }));
      }
    });
  };

  var OnChangeState =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(OnChangeState, _React$Component);

    function OnChangeState(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        previous: props.input.value
      };
      return _this;
    }

    var _proto = OnChangeState.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.input.value;
      var previous = this.state.previous;

      if (value !== previous) {
        this.setState({
          previous: value
        });
        children(value, previous);
      }
    };

    _proto.render = function render() {
      return null;
    };

    return OnChangeState;
  }(React.Component);

  var OnChange = function OnChange(_ref) {
    var name = _ref.name,
        children = _ref.children;
    return React.createElement(reactFinalForm.Field, {
      name: name,
      subscription: {
        value: true
      },
      allowNull: true,
      render: function render(props) {
        return React.createElement(OnChangeState, _extends({}, props, {
          children: children
        }));
      }
    });
  };

  var OnFocusState =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(OnFocusState, _React$Component);

    function OnFocusState(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        previous: !!props.meta.active
      };
      return _this;
    }

    var _proto = OnFocusState.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props = this.props,
          children = _this$props.children,
          active = _this$props.meta.active;
      var previous = this.state.previous;

      if (active && !previous) {
        this.setState({
          previous: active
        });
        children();
      } else if (!active && previous) {
        this.setState({
          previous: active
        });
      }
    };

    _proto.render = function render() {
      return null;
    };

    return OnFocusState;
  }(React.Component);

  var OnFocus = function OnFocus(_ref) {
    var name = _ref.name,
        children = _ref.children;
    return React.createElement(reactFinalForm.Field, {
      name: name,
      subscription: {
        active: true
      },
      render: function render(props) {
        return React.createElement(OnFocusState, _extends({}, props, {
          children: children
        }));
      }
    });
  };

  exports.ExternallyChanged = ExternallyChanged;
  exports.OnBlur = OnBlur;
  exports.OnChange = OnChange;
  exports.OnFocus = OnFocus;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-final-form-listeners.umd.js.map
