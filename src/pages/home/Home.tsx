import { Link } from 'react-router-dom';

import { APP_PATHS } from '../../router/constants/routes';
import { useAuth } from '../../hooks';

const Home = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Home Route!</h1>
      <button onClick={login}>Log in!</button>
      <Link to={APP_PATHS.Profile}>Ir a profile</Link>
    </div>
  );
};

export default Home;
