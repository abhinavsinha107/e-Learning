import './Header.css';

import HeaderImage from '../assets/header.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__description">
        <h1>Learn Something from Us</h1>
        <p>We are a team of industry experts</p>
        <p>with everyone having an experience of</p>
        <h3>atleast 5+ YEARS</h3>
      </div>
      <div className='header__image'>
        <img src={HeaderImage} alt="" />
      </div>
    </header>
  );
}
export default Header;