import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import JourneyLines from '../components/journey/journeyLines';
import JourneyStations from '../components/journey/journeyStations';
import ThemeToggle from '../components/themeToggle';
import Actions from '../redux/actions';

const JourneyScreen = ({ t }) => {
  const dispatch = useDispatch();
  const selectedLines = useSelector(state => state.stations.stations);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    console.log(stations);
  }, [stations]);

  const onUpdateLine = async line => {
    await dispatch(Actions.stations.getStationsForLine({ id: line }));
    setStations(selectedLines[line]);
  };

  return (
    <JourneyMainContainer>
      <span>{t('title')}</span>
      <ThemeToggle />
      <JourneyContainer>
        <JourneyLines onUpdateLine={onUpdateLine} />
        <JourneyStations stations={stations} />
      </JourneyContainer>
    </JourneyMainContainer>
  );
};

const JourneyMainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondary};
  padding: 10px;
  min-height: 80px;
  border-radius: 5px;
`;

JourneyScreen.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(JourneyScreen);
