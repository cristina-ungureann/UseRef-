import Player from './components/Player';
import TimerChallange from './components/TimerChallange';

function App() {
  return (
    <div className='centered'>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime="1" />
        <TimerChallange title="Not Easy" targetTime="5" />
        <TimerChallange title="Getting tough" targetTime="10" />
        <TimerChallange title="Pros Only" targetTime="15" />




      </div>
    </div>
  );
}

export default App;
// Accesing DOM Elements with Refs
// Managing Values with Refs
// Eposing API Functions from Components
// Detatch FOM Randering fromJSX structure with portals


