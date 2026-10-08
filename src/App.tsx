import "./App.css";
import {FloatingCharacter} from "./components/FloatingCharacter";

function App() {
  const currentXP = 40;
  const maxXP = 100;
  return (
    <main>
      <h1>Desktop Companion</h1>
      <FloatingCharacter 
        name="Tenzin" 
        level={5} 
        xp={currentXP} 
        maxXp={maxXP} />
    </main>
    
  );

}

export default App;
