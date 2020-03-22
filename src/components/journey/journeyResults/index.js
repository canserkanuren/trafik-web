import {
  faClock,
  faLongArrowAltRight,
  faMap,
  faTrain
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import JourneyTimeLine from '../journeyTimeLine';

const JourneyResults = () => {
  const themeContext = useContext(ThemeContext);
  const selectedLine = useSelector(state => state.lines.selectedLine);
  const journeys = useSelector(state => state.journey.journeys);
  console.log('journeys', journeys);

  if (journeys.length === 0) {
    return <></>;
  }
  return (
    <JourneyResultsContainer>
      <JourneyTitleResults>Liste des itinéraires</JourneyTitleResults>
      {journeys.map(journey => (
        <JourneyGlobalResult key={journey.from}>
          <JourneyDetailResults>
            <JourneyDepartArrival>
              <FontAwesomeIcon
                size='lg'
                icon={faMap}
                color={themeContext.tertiary}
              />
              <h4>{moment(journey.departureTime).format('hh:mm')}</h4>
              <FontAwesomeIcon
                size='lg'
                icon={faLongArrowAltRight}
                color={themeContext.tertiary}
              />
              <h4>{moment(journey.arrivalTime).format('hh:mm')}</h4>
            </JourneyDepartArrival>
            <JourneyDepartArrival>
              <FontAwesomeIcon
                size='lg'
                icon={faTrain}
                color={themeContext.tertiary}
              />
              <h4>Ligne {selectedLine.name.toUpperCase()}</h4>
            </JourneyDepartArrival>
            <JourneyDepartArrival>
              <FontAwesomeIcon
                size='lg'
                icon={faClock}
                color={themeContext.tertiary}
              />
              <JourneyDuration>{journey.duration / 60} min</JourneyDuration>
            </JourneyDepartArrival>
          </JourneyDetailResults>
          <JourneyTimeLine stops={journey.stopsAreas}></JourneyTimeLine>
        </JourneyGlobalResult>
      ))}
    </JourneyResultsContainer>
  );
};

JourneyResults.propTypes = {};

const JourneyDuration = styled.h4`
  color: ${({ theme }) => theme.tertiary};
`;

const JourneyTitleResults = styled.h4`
  margin: 1em 0;
`;

const JourneyDetailResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const JourneyDepartArrival = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const JourneyResultsContainer = styled.div`
  margin: 0 3em;
`;

const JourneyGlobalResult = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1em;
  border-radius: 5px;
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;

export default JourneyResults;
