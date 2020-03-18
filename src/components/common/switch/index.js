import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = props => {
  const { onChange } = props;
  const [checked, setChecked] = useState(props.checked);

  return (
    <SwitchContainer>
      <Check checked={checked} onChange={onChange} />
      <Slider onClick={() => setChecked(!checked)} />
    </SwitchContainer>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
};

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.secondary};
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.tertiary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
const Check = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${props => props.theme.secondary};

    &::before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
      background-color: ${props => props.theme.tertiary};
    }
  }
`;
export default Switch;
