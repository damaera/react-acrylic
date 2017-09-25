import React from 'react';

import PropTypes from 'prop-types';

const Test = (props) => {
  if (props.condition) {
    return (
      <span>
        { props.children }
      </span>
    )
  }
  return null
}

Test.propTypes = {
  condition: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default Test;