import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from './pages'
import { useToggle } from 'ahooks'
import {FlexBox} from "./components";

const Toggle = () => {
  const [visible, { toggle }] = useToggle(false);
  const ref: any = React.useRef();
  return <>
    <FlexBox.Flex cursor={"pointer"} onClick={() => toggle(!visible)}>切换</FlexBox.Flex>
    {visible && <Test ref={ref} />}
  </>
}


function App() {
  return (
    <FlexBox.Box className="App">
      <FlexBox.Box className="App-header">
        <FlexBox.Image src={logo} className="App-logo" alt="logo" />
        <FlexBox.Box>
          Edit <code>src/App.tsx</code> and save to reload.
        </FlexBox.Box>
        <FlexBox.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </FlexBox.Link>
        <Toggle />
      </FlexBox.Box>
    </FlexBox.Box>
  );
}

export default App;
