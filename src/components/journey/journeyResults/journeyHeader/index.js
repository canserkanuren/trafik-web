import {
  faClock,
  faLongArrowAltRight,
  faMap,
  faTrain
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import { device } from '../../../../config/styles';
import Icon from '../../../common/icon';

const JourneyHeader = ({ journey }) => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);
  const selectedLine = useSelector(state => state.selectedLine.selectedLine);
  return (
    <JourneyDetailResults>
      <JourneyDepartArrival>
        <FontAwesomeIcon size='lg' icon={faMap} color={themeContext.tertiary} />
        <h4>{moment(journey.departureTime).format('hh:mm')}</h4>
        <Icon
          size='lg'
          icon={faLongArrowAltRight}
          color={themeContext.tertiary}
        />
        <h4>{moment(journey.arrivalTime).format('hh:mm')}</h4>
      </JourneyDepartArrival>
      <JourneyDepartArrival>
        <Icon size='lg' icon={faTrain} color={themeContext.tertiary} />
        <h4>{`${t('journeys.line')} ${selectedLine.name.toUpperCase()}`}</h4>
      </JourneyDepartArrival>
      <JourneyDepartArrival>
        <Icon size='lg' icon={faClock} color={themeContext.tertiary} />
        <JourneyDuration>{journey.duration / 60} mn</JourneyDuration>
      </JourneyDepartArrival>
    </JourneyDetailResults>
  );
};

JourneyHeader.propTypes = {
  journey: PropTypes.object.isRequired
};

export default JourneyHeader;

const JourneyDuration = styled.h4``;

const JourneyDetailResults = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    flex-direction: column;
  }

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
