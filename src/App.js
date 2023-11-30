import Example from "./example";
import { useState, useCallback, useEffect } from "react";
// import { socket } from './socket';
import socketIO from 'socket.io-client';

function App() {
  // const socket1 = new WebSocket(`wss://trucknow.paklogics.com/socket.io/tracking`)
  // console.log(socket1)
  const socket = socketIO.connect(`wss://trucknow.paklogics.com?userId=afshalhasbeenconnected`,{path: "/socket.io/tracking"});
  const [press, setPress] = useState(0)
  console.log("App Component is Rendered.")
  const callBack = useCallback(() => {
    console.log("CallBack To Passed To child.")
  }, [])
  /*****socket implementation */
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    function onConnect() {
      console.log("socket connected.....")
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    // function onFooEvent(value) {
    //   setFooEvents(previous => [...previous, value]);
    // }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    // socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      // socket.off('foo', onFooEvent);
    };
  }, []);

  useEffect(()=> {
    // socket.connect();
  }, [])
  console.log(isConnected)
  /***socket implementaion */

  return (
    <div className="App">
      <input disabled value={press} />
      <button onClick={() => setPress(press+1)}> PressMe </button>
      <Example callBack={callBack} />
    </div>
  );
}

export default App;
