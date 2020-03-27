import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Panel, Progress } from 'rsuite';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import JourneyTimeLine from '../journeyTimeLine';
import JourneyHeader from './journeyHeader';

const JourneyResults = () => {
  const { t } = useTranslation();
  const { Circle } = Progress;
  const journeys = useSelector(state => state.journey.journeys);

  if (journeys.length === 0) {
    return <></>;
  }

  return (
    <JourneyResultsContainer>
      <JourneyTitleResults>{t('journeys.list')}</JourneyTitleResults>
      {journeys.map(journey => (
        <JourneyGlobalResult
          header={<JourneyHeader journey={journey} />}
          collapsible
          bordered
          shaded
          key={uuid()}
        >
          <JourneyResultsTimeLineContainer>
            <JourneyResultsTimeLineItem>
              <JourneyTimeLine stops={journey.stopsAreas} key={uuid()} />
            </JourneyResultsTimeLineItem>

            {/* <JourneyResultsTimeLineItem>
              <Circle percent={30} strokeColor='#ffc107' />
            </JourneyResultsTimeLineItem> */}
          </JourneyResultsTimeLineContainer>
        </JourneyGlobalResult>
      ))}
    </JourneyResultsContainer>
  );
};

JourneyResults.propTypes = {};

const JourneyTitleResults = styled.h4`
  margin: 1em 0;
`;

const JourneyResultsContainer = styled.div`
  margin: 0 3em;
`;

const JourneyGlobalResult = styled(Panel)`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const JourneyResultsTimeLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const JourneyResultsTimeLineItem = styled.div`
  width: 100%;
`;

export default JourneyResults;
