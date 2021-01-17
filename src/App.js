
import './App.css';
import 'react-notifications-component/dist/theme.css'
import 'semantic-ui-css/semantic.min.css'
import { AppRouter } from './routers/AppRouter';
import { StoreContext } from './context/StoreContext';
import { useState } from 'react';
import ReactNotification from 'react-notifications-component'


function App() {

  const [loading, setLoading] = useState(false)

  return (
    <div>
      <StoreContext.Provider value = {{
        loading,
        setLoading
      }} >
        
        <ReactNotification />
        <AppRouter/>

      </StoreContext.Provider>
    </div>
  );
}

export default App;
