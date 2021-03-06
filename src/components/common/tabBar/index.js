import { faCog } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import trafikLogo from '../../../assets/logos/trafik/default-monochrome.svg';
import { device } from '../../../config/styles';
import Icon from '../icon';
import { Button } from 'rsuite';
import { useDispatch } from 'react-redux';
import Actions from '../../../redux/actions';

const TabBar = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  const postNotif = async () => {
    await dispatch(Actions.notifications.pushNotification());
  };

  return (
    <TabBarContainer>
      <TabBarImage src={trafikLogo}></TabBarImage>
      <Button onClick={postNotif} appearance='ghost'>
        Notification
      </Button>
      <Icon
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
  @media ${device.tablet}, ${device.mobileL} {
    height: 40px;
  }
`;

const TabBarImage = styled.img`
  height: 100%;
`;
