import { FC } from 'react';
import { Background } from './components/shared/Background';
import { JoinServer } from './pages/JoinServer';

const App: FC = () => {
  return (
    <>
      <Background>
        <JoinServer />
      </Background>
    </>
  );
};

export default App;
