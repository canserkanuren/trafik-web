import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const JourneyStationSelect = ({
  placeholder,
  value,
  list,
  updateValueFunction
}) => {
  const onChange = e => {
    updateValueFunction(e.target.value);
  };

  return (
    <JourneyStationSelectContainer>
      <JourneySelect value={value} onChange={onChange}>
        <JourneySelectOption value=''>{placeholder}</JourneySelectOption>
        {list.map(s => (
          <JourneySelectOption key={uuidv4()} value={s.codeUic}>
            {s.name}
          </JourneySelectOption>
        ))}
      </JourneySelect>
    </JourneyStationSelectContainer>
  );
};

JourneyStationSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  updateValueFunction: PropTypes.func.isRequired
};

export default JourneyStationSelect;

const JourneyStationSelectContainer = styled.div``;

const JourneySelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  padding-left: 22px;
`;

const JourneySelectOption = styled.option``;
