import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import trafikLogo from '../../../assets/logos/trafik/default-monochrome.svg';

const TabBar = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);

  return (
    <TabBarContainer>
      <TabBarImage src={trafikLogo}></TabBarImage>
      <FontAwesomeIcon
        size='lg'
        icon={faCog}
        color={themeContext.tertiary}
        onClick={() => history.push('settings')}
      />
    </TabBarContainer>
  );
};

TabBar.propTypes = {};

export default TabBar;

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  height: 50px;
`;

const TabBarImage = styled.img`
  height: 100%;
`;
