import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as lineLogos from '../../../../assets/logos/lignes';

const LineLogo = ({ line, click }) => {
  return (
    <LineLogoContainer
      src={lineLogos[line.name]}
      onClick={() => click(line)}
    ></LineLogoContainer>
  );
};

LineLogo.propTypes = {
  line: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired
};

const LineLogoContainer = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export default LineLogo;
