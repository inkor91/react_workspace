import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
  <div>안녕하세요, 유저 {name}님 <br/>
    childeren 값은 {children}입니다.
    <br/>
    제가 좋아하는 숫자는 {favoriteNumber}입니다.
  </div>
  );
};

MyComponent.defaultProps = {
  name : '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;