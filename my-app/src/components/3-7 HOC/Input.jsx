import React from 'react';
import withLoading from './withLoading';

function Input() {
  return <input defualutValue="Input"/>;
}

export default withLoading(Input);
