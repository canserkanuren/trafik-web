import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import actions from '../../redux/actions';
import Switch from '../common/switch';

const ThemeToggle = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);

  const changeTheme = e => {
    e.preventDefault();
    dispatch(actions.theme.changeTheme(!isDark));
  };

  return (
    <ThemeToggleContainer>
      <span>{t('theme.darkTheme')}</span>
      <Switch checked={isDark} onChange={e => changeTheme(e)} />
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;

const ThemeToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 60px;
`;
