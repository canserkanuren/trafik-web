import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Timeline } from 'rsuite';
import styled from 'styled-components';
import TabBar from '../components/common/tabBar';
import JourneyLines from '../components/journey/journeyLines';
import JourneyStations from '../components/journey/journeyStations';
import Actions from '../redux/actions';

const JourneyScreen = ({ history }) => {
  const dispatch = useDispatch();
  const selectedLines = useSelector(state => state.stations.stations);
  const [stations, setStations] = useState([]);

  const onUpdateLine = async line => {
    await dispatch(Actions.stations.getStationsForLine({ id: line }));
    setStations(selectedLines[line]);
  };

  return (
    <JourneyMainContainer>
      <TabBar history={history} />
      <JourneyContainer>
        <JourneyLines onUpdateLine={onUpdateLine} />
        <JourneyStations stations={stations} />
      </JourneyContainer>
      <Timeline align={'right'}>
        <Timeline.Item>
          <p>2018-03-01</p>
          <p>Your order starts processing</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2018-03-02</p>
          <p>Order out of stock</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2018-03-10</p>
          <p>Arrival</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2018-03-12</p>
          <p>Order out of the library</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2018-03-15</p>
          <p>Sending you a piece</p>
        </Timeline.Item>
      </Timeline>
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
