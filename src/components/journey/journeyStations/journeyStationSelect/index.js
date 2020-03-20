import PropTypes from 'prop-types';
import React from 'react';
import { SelectPicker } from 'rsuite';
import styled from 'styled-components';

const JourneyStationSelect = ({ placeholder, value, list, onSelect }) => {
  return (
    <JourneyStationSelectContainer>
      <SelectPicker
        data={list}
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
        block
      />
    </JourneyStationSelectContainer>
  );
};

JourneyStationSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default JourneyStationSelect;

const JourneyStationSelectContainer = styled.div``;
