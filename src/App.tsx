import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Form from './components/Form';
import ReducerForm from './components/ReducerForm';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header/>
      <Container>
        <Form/>
        <ReducerForm/>
      </Container>
    </>
  );
}

export default App;
