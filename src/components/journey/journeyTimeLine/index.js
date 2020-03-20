import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Timeline } from 'rsuite';
import styled from 'styled-components';

const JourneyTimeLine = () => {
  const journeys = useSelector(state => state.journey.journeys);
  console.log(journeys);
  if (journeys.length === 0) {
    return <></>;
  }

  return (
    <JourneyTimeLineContainer align={'left'}>
      <JourneyTimeLineItem>
        <p>2018-03-01</p>
        <p>Your order starts processing</p>
      </JourneyTimeLineItem>
      <JourneyTimeLineItem>
        <p>2018-03-02</p>
        <p>Order out of stock</p>
      </JourneyTimeLineItem>
      <JourneyTimeLineItem>
        <p>2018-03-10</p>
        <p>Arrival</p>
      </JourneyTimeLineItem>
      <JourneyTimeLineItem>
        <p>2018-03-12</p>
        <p>Order out of the library</p>
      </JourneyTimeLineItem>
      <JourneyTimeLineItem>
        <p>2018-03-15</p>
        <p>Sending you a piece</p>
      </JourneyTimeLineItem>
    </JourneyTimeLineContainer>
  );
};

const JourneyTimeLineContainer = styled(Timeline)``;

const JourneyTimeLineItem = styled(Timeline.Item)``;

JourneyTimeLine.propTypes = {
  journey: PropTypes.object
};

export default JourneyTimeLine;
