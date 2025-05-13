
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <UserListPage currentUser={user} />
  ) : (
    <LoginPage onLogin={setUser} />
  );
}

export default App;
