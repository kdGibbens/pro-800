import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [midiDevices, setMidiDevices] = useState<MIDIOutput[] | []>([]);
  useEffect(() => {
    navigator.requestMIDIAccess().then((accept: MIDIAccess) => {
      const devices = Array.from(accept.outputs.values());
      setMidiDevices(devices);
    });
  }, []);
  return (
    <div>
      Test
      <div>
        {midiDevices.map((device) => {
          return <p key={device.id}>{device.name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
