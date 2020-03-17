import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import JourneyLines from '../components/journey/journeyLines';
import JourneyStations from '../components/journey/journeyStations';
import ThemeToggle from '../components/themeToggle';
import Actions from '../redux/actions';

const JourneyScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedLines = useSelector(state => state.stations.stations);
  const [stations, setStations] = useState([]);

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

JourneyScreen.propTypes = {};

export default JourneyScreen;
