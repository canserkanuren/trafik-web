import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button, DatePicker } from 'rsuite';
import styled, { ThemeContext } from 'styled-components';
import Actions from '../../../redux/actions';
import JourneyStationSelect from './journeyStationSelect';

const JourneyStations = ({ stations }) => {
  const themeContext = useContext(ThemeContext);
  // à faire avec redux pour avoir l'info autre part que dans ce composant
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // all stations
  const [allStations, setAllStations] = useState([]);

  // departure stations : all list and selected value
  const [departureStation, setDepartureStation] = useState('');
  const [departureStations, setDepartureStations] = useState([]);

  // arrival stations : all list and selected value
  const [arrivalStation, setArrivalStation] = useState('');
  const [arrivalStations, setArrivalStations] = useState([]);

  // departure time
  const [departureTime, setDepartureTime] = useState('');

  useEffect(() => {
    const s = stations.map(st => ({ label: st.name, value: st.codeUic }));
    setAllStations(s);
    setDepartureStations(s);
    setArrivalStations(s);
  }, [stations]);

  useEffect(() => {
    callbackUpdateStation(departureStation, setArrivalStations);
  }, [departureStation]);

  useEffect(() => {
    callbackUpdateStation(arrivalStation, setDepartureStations);
  }, [arrivalStation]);

  const callbackUpdateStation = (idStation, callback) => {
    const s = [...allStations.filter(st => st.value !== idStation)];
    callback(s);
  };

  const handleJourneyValidation = async e => {
    e.preventDefault();
    console.log(departureTime);
    const d = moment(departureTime).format('YYYYMMDDThhmmss');
    console.log(d);
    await dispatch(
      Actions.journey.getJourney({
        fromStation: departureStation,
        toStation: arrivalStation,
        departureTime: d
      })
    );
  };

  return (
    <JourneyStationsContainer>
      <JourneyStationSelect
        list={departureStations}
        placeholder={t('journeys.departureStationSelection')}
        onSelect={setDepartureStation}
        value={departureStation}
        block
      />
      <JourneyStationSelect
        list={arrivalStations}
        placeholder={t('journeys.arrivalStationSelection')}
        onSelect={setArrivalStation}
        value={arrivalStation}
        block
      />
      <DatePicker
        format='YYYY-MM-DD'
        placeholder={'Date de départ'}
        hideSeconds={() => true}
        onSelect={date => setDepartureTime(date)}
        oneTap={true}
        ranges={[
          {
            label: 'Now',
            value: new Date(),
            closeOverlay: true
          }
        ]}
      />
      <JourneyStationsButtons>
        <Button
          style={{ backgroundColor: themeContext.tertiary }}
          onClick={handleJourneyValidation}
        >
          {t('journeys.validateForm')}
        </Button>
      </JourneyStationsButtons>
    </JourneyStationsContainer>
  );
};

JourneyStations.propTypes = {
  stations: PropTypes.array.isRequired
};

export default JourneyStations;

const JourneyStationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & > * {
    padding: 5px 0;
  }
  & > *:not(:last-child) {
    padding-right: 5px;
  }
`;

const JourneyStationsButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
