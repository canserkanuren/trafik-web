import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Actions from '../../../redux/actions';
import LineLogo from './lineLogo';

const JourneyLines = ({ onUpdateLine }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lines = useSelector(state => state.lines.lines);

  useEffect(() => {
    dispatch(Actions.lines.initLines());
  }, []);

  const selectLine = line => {
    onUpdateLine(line._id);
    dispatch(Actions.lines.selectedLine(line));
  };

  if (lines && lines.length === 0) {
    return <div>Loading..</div>;
  }

  return (
    <JourneyLinesContainer>
      <h4>{t('journeys.lineSelection')}</h4>
      <JourneyLinesImageContainer>
        {lines.map(l => (
          <LineLogo key={l._id} line={l} click={selectLine} />
        ))}
      </JourneyLinesImageContainer>
    </JourneyLinesContainer>
  );
};

const JourneyLinesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin: 5px 0;
  }
`;
const JourneyLinesImageContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

JourneyLines.propTypes = {
  onUpdateLine: PropTypes.func.isRequired
};

export default JourneyLines;
