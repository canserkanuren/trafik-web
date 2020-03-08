import React from 'react';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions';
import { connect } from 'react-redux';
import { darkTheme, lightTheme } from '../../config/themes';

const ThemeToggle = props => {
  return (
    <div>
      <button onClick={() => props.actions.theme.changeTheme(lightTheme)}>
        LightTheme
      </button>
      <button onClick={() => props.actions.theme.changeTheme(darkTheme)}>
        DarkTheme
      </button>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(actions.theme, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
