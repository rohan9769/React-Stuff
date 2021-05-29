import './App.css';
import Introduction from './components/Introduction';
import Intro from './components/Intro'
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Intro></Intro>
      <Skills></Skills>
    </div>
    // <div className="App" class="p-6 items-center justify-center">
    //     <h1 class="text-blue-400 font-extrabold">Hello World!</h1>
    //     <p class="tracking-widest">This is my first React App.</p>
    // </div>
  );
}

export default App;
