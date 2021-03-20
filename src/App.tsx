import { FC } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Form from './components/Form';
import ReducerForm from './components/ReducerForm';
import { IForm } from './sharedInterfaces';

const App: FC = () => {
  const data: IForm[] = [
    { name: 'Form', component: Form },
    { name: 'ReducerForm', component: ReducerForm }
  ];

  return (
    <>
      <Header/>
      <Container options={data}/>
    </>
  );
}

export default App;
