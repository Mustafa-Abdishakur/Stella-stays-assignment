import './App.css';
import Header from './components/header/header';
import Search from './components/search/search';
import SlideImages from './components/slideImages/slideImages';
import PageContent from './components/pageContent/pageContent';

function App() {
  return (
    <div className="App" >
      <Header />
      <Search />
      <SlideImages />
      <PageContent />
    </div>
  );
}

export default App;
