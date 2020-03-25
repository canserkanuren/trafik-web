import React from 'react';
import PropTypes from 'prop-types';
import { SelectPicker } from 'rsuite';
import styled from 'styled-components';

const Select = ({ placeholder, value, list, onSelect }) => {
  return (
    <SelectContainer>
      <SelectPicker
        data={list}
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
        onClean={() => onSelect('')}
        block
      />
    </SelectContainer>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Select;

const SelectContainer = styled.div``;
