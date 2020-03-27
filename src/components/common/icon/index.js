import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Icon = ({ size, icon, color, onClick = null }) => {
  return (
    <IconContainer size={size} icon={icon} color={color} onClick={onClick} />
  );
};

Icon.propTypes = {
  size: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Icon;

const IconContainer = styled(FontAwesomeIcon)`
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'initial')};
`;
