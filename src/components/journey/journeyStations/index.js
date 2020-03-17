import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import JourneyStationSelect from './journeyStationSelect';

const JourneyStations = ({ stations }) => {
  // all stations
  const [allStations, setAllStations] = useState([]);

  // departure stations : all list and selected value
  const [departureStation, setDepartureStation] = useState('');
  const [departureStations, setDepartureStations] = useState([]);

  // arrival stations : all list and selected value
  const [arrivalStation, setArrivalStation] = useState('');
  const [arrivalStations, setArrivalStations] = useState([]);

  useEffect(() => {
    setAllStations(stations);
    setDepartureStations(stations);
    setArrivalStations(stations);
  }, [stations]);

  useEffect(() => {
    callbackUpdateStation(departureStation, setArrivalStations);
  }, [departureStation]);

  useEffect(() => {
    callbackUpdateStation(arrivalStation, setDepartureStations);
  }, [arrivalStation]);

  const callbackUpdateStation = (idStation, callback) => {
    const s = [...allStations.filter(st => st.codeUic !== idStation)];
    callback(s);
  };

  if (stations && stations.length === 0) {
    return <></>;
  }

  return (
    <JourneyStationsContainer>
      <JourneyStationSelect
        placeholder={'Sélectionner une gare de départ'}
        value={departureStation}
        list={departureStations}
        updateValueFunction={setDepartureStation}
      />
      <JourneyStationSelect
        placeholder={"Sélectionner une gare d'arrivée"}
        value={arrivalStation}
        list={arrivalStations}
        updateValueFunction={setArrivalStation}
      />
    </JourneyStationsContainer>
  );
};

JourneyStations.propTypes = {
  stations: PropTypes.array.isRequired
};

export default JourneyStations;

const JourneyStationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 110px;
`;
