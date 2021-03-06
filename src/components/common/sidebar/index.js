import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import { useDimensions } from './use-dimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    x: -300,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <SidebarNavigation
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      width={isOpen ? '300px' : '0'}
    >
      <SidebarBackground variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </SidebarNavigation>
  );
};

const SidebarBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
`;

const SidebarNavigation = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ width }) => width};
`;

export default Sidebar;
