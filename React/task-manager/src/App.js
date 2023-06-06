

import Login from './components/Login';

import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;
