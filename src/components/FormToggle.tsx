import { FC } from 'react';

interface IProps {
  currentIndex: number
}

const FormToggle:FC<IProps> = ({ currentIndex, children }) => {
  if (Array.isArray(children)) {
    return <>{children[currentIndex]}</>
  } else {
    return null;
  }
}

export default FormToggle;