import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => (
  <NavigationItemsContainer variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </NavigationItemsContainer>
);

const itemIds = [0, 1, 2, 3, 4];

const NavigationItemsContainer = styled(motion.ul)`
  margin: 0;
  padding: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export default Navigation;
