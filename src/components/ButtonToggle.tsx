import { FC } from 'react';

interface IProps {
  key: string,
  toggleForm: () => void
}

const ButtonToggle:FC<IProps> = ({ toggleForm, children }) => {
  return (
    <button className='btn' onClick={toggleForm}>
      {children}
    </button>
  );
}

export default ButtonToggle;