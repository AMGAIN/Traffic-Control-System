// pages/Dashboard.jsx
import { useState } from 'react';
import AlertContainer from '../components/AlertContainer';
import MainContainer from '../components/MainContainer';
import DetailAlert from '../components/DetailAlert';

function Dashboard() {
  const [alert, setAlert] = useState(null);

  return (
    <>
      <AlertContainer onSelectAlert={setAlert} />
      <MainContainer />
      <DetailAlert alert={alert} />
    </>
  );
}

export default Dashboard;
