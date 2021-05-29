import './App.css';
import Introduction from './components/Introduction';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <Skills></Skills>
    </div>
  );
}

export default App;
