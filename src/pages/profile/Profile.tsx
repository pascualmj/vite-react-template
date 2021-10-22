import { Link } from 'react-router-dom';

import { APP_PATHS } from '../../router/constants/routes';
import { useAuth } from '../../hooks';

const Profile = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Profile Page! This is a private route :O jo</h1>
      <button onClick={logout}>Log out!</button>
      <Link to={APP_PATHS.Home}>Ir a home</Link>
    </div>
  );
};

export default Profile;
