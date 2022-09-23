import React from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

const Home = () => {
  const [state, actions] = useCounterContext(); /* eslint-disable-line */

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <React.Fragment>
      <Heading />

      <p>
        <Button onButtonClick={actions.increase}>increase</Button>
      </p>
      <p>
        <Button onButtonClick={actions.decrease}>decrease</Button>
      </p>
      <p>
        <Button onButtonClick={actions.reset}>reset</Button>
      </p>
      <p>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
      </p>
      <p>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set 100</Button>
      </p>
      <p>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async increase
        </Button>
      </p>
      <p>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </p>
    </React.Fragment>
  );
};

export default Home;
