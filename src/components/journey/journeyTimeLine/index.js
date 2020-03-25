import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Timeline } from 'rsuite';
import styled from 'styled-components';

const JourneyTimeLine = ({ stops }) => {
  const selectedLine = useSelector(state => state.lines.selectedLine);

  if (stops.length === 0) {
    return <></>;
  }

  return (
    <>
      {stops.map(stop => (
        <>
          <JourneyTimeLineContainer align={'left'}>
            {stop.mode === 'waiting' ? (
              <>
                <p></p>
              </>
            ) : (
              <>
                {stop.stops.map(s => (
                  <>
                    <JourneyTimeLineItem
                      selectedLine={selectedLine}
                      key={stop.name}
                    >
                      <p>{s.name}</p>
                    </JourneyTimeLineItem>
                  </>
                ))}
              </>
            )}
          </JourneyTimeLineContainer>
        </>
      ))}
    </>
  );
};

const JourneyTimeLineContainer = styled(Timeline)``;

const JourneyTimeLineItem = styled(Timeline.Item)`
  .rs-timeline-item-dot::before {
    background-color: ${({ selectedLine }) => selectedLine.color};
  }
`;

JourneyTimeLine.propTypes = {
  stops: PropTypes.array
};

export default JourneyTimeLine;
