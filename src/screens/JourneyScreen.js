import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TrainStation from '../assets/images/train-station.jpg';
import TabBar from '../components/common/tabBar';
import JourneyLines from '../components/journey/journeyLines';
import JourneyResults from '../components/journey/journeyResults';
import JourneyStations from '../components/journey/journeyStations';
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
      <JourneyGlobal>
        <JourneyContainer>
          <JourneyLines onUpdateLine={onUpdateLine} />
          <JourneyStations stations={stations} />
        </JourneyContainer>
      </JourneyGlobal>
      <JourneyResults></JourneyResults>
    </JourneyMainContainer>
  );
};

const JourneyMainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const JourneyGlobal = styled.div`
  height: 500px;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${TrainStation});
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
