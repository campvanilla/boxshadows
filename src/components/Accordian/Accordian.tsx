import React, { useState, useCallback } from 'react';

import { AccordianItemContainer } from './styles';

interface ItemProps {
  heading: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordian = ({ children }) => {
  const [order, updateOrder] = useState();

  return children;
};

const Item: React.FC<ItemProps> = ({ heading, children, defaultOpen }) => {
  const [open, updateOpen] = useState(!!defaultOpen);

  const handleHeaderClick = useCallback(() => {
    updateOpen((oldState) => !oldState);
  }, []);

  return (
    <AccordianItemContainer open={open}>
      <div className='header' onClick={handleHeaderClick}>
        {heading}
        <span className='toggle-btn'>&#10095;</span>
      </div>
      {
        open
        ? (
          <div className='content'>
            {children}
          </div>
        )
        : (
          null
        )
      }
    </AccordianItemContainer>
  );
}

Accordian.Item = Item;

export default Accordian;
