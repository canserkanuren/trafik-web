import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as lineLogos from '../../../../assets/logos/lignes';

const LineLogo = ({ id, line, click }) => {
  return (
    <LineLogoContainer
      src={lineLogos[line]}
      onClick={() => click(id)}
    ></LineLogoContainer>
  );
};

LineLogo.propTypes = {
  id: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

const LineLogoContainer = styled.img`
  height: 30px;
  width: 30px;
`;

export default LineLogo;
