import React from 'react';

type SwitchProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

import { SwitchContainer } from './styles';

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    value,
    checked
  } = props;

  return (
    <SwitchContainer checked={typeof checked !== 'undefined' ? checked : !!value} >
      <span className='knob' />
      <input type='checkbox' value={value} {...props} />
    </SwitchContainer>
  );
}

export default Switch;
