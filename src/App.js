import styled from 'styled-components';

import ItemsProvider from './context/items.context';

import { Header } from './components/header/header.component';
import { FiltersBar } from './components/filters-bar/filters-bar.component';
import { ItemsContainer } from './components/items-container/items-container.component';

import './App.scss';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <ItemsProvider>
      <MainContainer>
        <Header />
        <FiltersBar />
        <ItemsContainer />
      </MainContainer>
    </ItemsProvider>
  );
}

export default App;
