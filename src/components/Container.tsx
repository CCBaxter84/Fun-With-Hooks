import * as React from 'react';

const Container: React.FunctionComponent = (props) => {
  return (
    <main>
      {props.children}
    </main>
  );
}

export default Container;