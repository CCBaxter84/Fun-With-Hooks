import { FunctionComponent, useState } from 'react';
import { IHandlerFunction } from '../sharedInterfaces';

const Form: FunctionComponent = () => {
  const [ firstName, setFirstName ] = useState<string>('');
  const [ lastName, setLastName ] = useState<string>('');
  const [ planet, setPlanet ] = useState<string>('');
  const [ affiliation, setAffiliation ] = useState<string>('');
  const [ showState, setShowState ] = useState<boolean>(false);

  const handleSubmit: IHandlerFunction = event => {
    event.preventDefault();
    setShowState(true);
    setTimeout(() => setShowState(false), 5000);
  }

  const handleChange: IHandlerFunction = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'planet':
        setPlanet(value);
        break;
      case 'affiliation':
        setAffiliation(value);
        break;
      default:
        break;
    }
  }

  return (
    <section className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
        </label>
        <label>
          Last Name:
          <input type='text' name='lastName' value={lastName} onChange={handleChange}/>
        </label>
        <label>
          Planet:
          <input type='text' name='planet' value={planet} onChange={handleChange}/>
        </label>
        <label>
          Affiliation:
          <input type='text' name='affiliation' value={affiliation} onChange={handleChange}/>
        </label>
        <input type='submit' value='Submit' className='btn'/>
      </form>
      {showState &&
        <article className='last-submission'>
          <h2>{firstName} {lastName} of {planet} is a member of the {affiliation}</h2>
        </article>}
    </section>
  );
}

export default Form;