import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TabBar from '../components/common/tabBar';
import JourneyLines from '../components/journey/journeyLines';
import JourneyStations from '../components/journey/journeyStations';
import JourneyTimeLine from '../components/journey/journeyTimeLine';
import Actions from '../redux/actions';

const JourneyScreen = () => {
  const dispatch = useDispatch();
  const selectedLines = useSelector(state => state.stations.stations);
  const [stations, setStations] = useState([]);

  const onUpdateLine = async line => {
    await dispatch(Actions.stations.getStationsForLine({ id: line }));
    setStations(selectedLines[line]);
  };

  return (
    <JourneyMainContainer>
      <TabBar />
      <JourneyContainer>
        <JourneyLines onUpdateLine={onUpdateLine} />
        <JourneyStations stations={stations} />
      </JourneyContainer>
      <JourneyTimeLine />
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
  history: PropTypes.object.isRequired
};

export default JourneyScreen;
