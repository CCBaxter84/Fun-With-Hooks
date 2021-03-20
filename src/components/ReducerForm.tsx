import { FunctionComponent, useReducer } from 'react';
import { IHandlerFunction } from '../sharedInterfaces';
import { reducer, initialState } from '../reducer';

const ReducerForm: FunctionComponent = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleSubmit: IHandlerFunction = event => {
    event.preventDefault();
    dispatch({ type: 'showData', value: '' });
    setTimeout(() => dispatch({ type: 'hideData', value: '' }), 5000);
  }

  const handleChange: IHandlerFunction = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'firstName':
        dispatch({ type: 'firstName', value });
        break;
      case 'lastName':
        dispatch({ type: 'lastName', value });
        break;
      case 'planet':
        dispatch({ type: 'planet', value });
        break;
      case 'affiliation':
        dispatch({ type: 'affiliation', value });
        break;
      default:
        break;
    }
  }

  return (
    <section className='form-container'>
      <article className='form-title'>
        <h2>Reducer Form</h2>
      </article>
      <form className='reducer-form' onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type='text' name='firstName' value={state.firstName} onChange={handleChange}/>
        </label>
        <label>
          Last Name:
          <input type='text' name='lastName' value={state.lastName} onChange={handleChange}/>
        </label>
        <label>
          Planet:
          <input type='text' name='planet' value={state.planet} onChange={handleChange}/>
        </label>
        <label>
          Affiliation:
          <input type='text' name='affiliation' value={state.affiliation} onChange={handleChange}/>
        </label>
        <input type='submit' value='Submit' className='btn'/>
      </form>
      {state.showData &&
        <article className='last-submission'>
          <h2>{state.firstName} {state.lastName} of {state.planet} is a member of the {state.affiliation}</h2>
        </article>}
    </section>
  );
}

export default ReducerForm;