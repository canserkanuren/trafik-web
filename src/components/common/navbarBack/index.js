import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavbarBack = ({ history, title }) => {
  return (
    <NavbarBackContainer>
      <NavbarBackButtons
        icon={faChevronLeft}
        onClick={() => history.goBack()}
      />
      <span>{title}</span>
      <span></span>
    </NavbarBackContainer>
  );
};

NavbarBack.propTypes = {
  history: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

const NavbarBackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 10px;
  border-bottom-color: lightgray;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const NavbarBackButtons = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export default NavbarBack;
