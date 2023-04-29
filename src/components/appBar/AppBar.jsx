import { useAuth } from 'hooks';
import { Navigation } from 'components/navigation/Navigation';
import css from '../appBar/AppBar.module.css';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
