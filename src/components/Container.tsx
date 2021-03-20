import { FC, useState, createElement } from 'react';
import { IForm } from '../sharedInterfaces';
import ButtonToggle from './ButtonToggle';
import FormToggle from './FormToggle';

interface IProps {
  options: IForm[]
}

const Container: FC<IProps> = ({ options }) => {
  const [ currentForm, setCurrentForm ] = useState<number>(0);
  return (
    <main>
      <section className='controller-btns'>
        {options.map((el, index) => {
          return (
            <ButtonToggle
              key={`button${index}`}
              toggleForm={() => setCurrentForm(index)}
            >
              {el.name}
            </ButtonToggle>
          );
        })}
      </section>
      <FormToggle currentIndex={currentForm}>
        {options.map((el, index) => {
          return (
            <>
              <section key={`form${index}`}>
                {createElement(el.component)}
              </section>
            </>
          )
        })}
      </FormToggle>
    </main>
  );
}

export default Container;