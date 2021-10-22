import { APP_TITLE } from './config/env';
import { AuthProvider } from './contexts/auth/AuthContext';
import MainRouter from './router/MainRouter';

console.log(APP_TITLE);

const App = () => {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
};

export default App;
