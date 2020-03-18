import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import trafikLogo from '../../../assets/logos/trafik/logo-without-background.svg';

const TabBar = ({ history }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TabBarContainer>
      <TabBarImage src={trafikLogo}></TabBarImage>
      <FontAwesomeIcon
        icon={faCog}
        color={themeContext.tertiary}
        onClick={() => history.push('settings')}
      />
    </TabBarContainer>
  );
};

TabBar.propTypes = {
  history: PropTypes.object.isRequired
};

export default TabBar;

const TabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const TabBarImage = styled.img`
  height: 35px;
  width: 35px;
`;
