import { MoralisProvider } from 'react-moralis';
import './App.css';
import { AppRouter } from './Routes/AppRouter';
import ReactGA from "react-ga";
const TRACKING_ID = "G-RGRPTSZB8Q";
ReactGA.initialize(TRACKING_ID, { debug: true, alwaysSendToDefaultTracker: false });
ReactGA.pageview(window.location.pathname + window.location.search);

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

function App() {
    
  return (
    <MoralisProvider
    appId={APP_ID || ''}
    serverUrl={SERVER_URL || ''}
    initializeOnMount={true}
  >
    <AppRouter />
  </MoralisProvider>
  );
}

export default App;
