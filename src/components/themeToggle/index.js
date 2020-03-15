import React from 'react';
import actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

const ThemeToggle = props => {
  const dispatch = useDispatch();

  const changeTheme = (e, bool) => {
    e.preventDefault();
    dispatch(actions.theme.changeTheme(bool));
  };
  return (
    <div>
      <button onClick={e => changeTheme(e, false)}>LightTheme</button>
      <button onClick={e => changeTheme(e, true)}>DarkTheme</button>
    </div>
  );
};

export default ThemeToggle;
