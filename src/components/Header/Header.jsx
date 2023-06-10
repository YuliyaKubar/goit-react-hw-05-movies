import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={css.nav}>
            <NavLink to={'/'} className={css.link}>
              Home
            </NavLink>
          </li>
          <li className={css.nav}>
            <NavLink to={'/movies'} className={css.link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
