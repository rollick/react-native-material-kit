//
// Common PropTypes definition
//
// Created by ywu on 15/7/16.
//
const { PropTypes, Text } = require('react-native');

// -----------
// ## Data types

// <section id="dimen">Dimension</section>
const dimen = PropTypes.objectOf({
  width: PropTypes.number,
  height: PropTypes.number,
});

// <section id="font">Font</section>
const font = PropTypes.objectOf({
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: Text.propTypes.style.fontWeight,
  fontStyle: Text.propTypes.style.fontStyle,
  fontFamily: PropTypes.string,
});

// <section id="rippleLocation">Ripple hot-spot location</section>
const rippleLocation = PropTypes.oneOf([
  'tapLocation',
  'center',
  //'left',
  //'right',
]);


// ## Public interface
exports.dimen = dimen;
exports.font = font;
exports.rippleLocation = rippleLocation;
