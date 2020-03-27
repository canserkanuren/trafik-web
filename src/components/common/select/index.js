import React from 'react';
import PropTypes from 'prop-types';
import { SelectPicker } from 'rsuite';
import styled from 'styled-components';

const Select = ({ placeholder, value, list, onSelect, disabled = false }) => {
  return (
    <SelectContainer>
      <SelectPicker
        data={list}
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
        onClean={() => onSelect('')}
        disabled={disabled}
        block
      />
    </SelectContainer>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Select;

const SelectContainer = styled.div``;
