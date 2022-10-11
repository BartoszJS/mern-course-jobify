import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../components';
import {Link} from 'react-router-dom';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby shaman everyday carry vape bicycle rights deep v meh. Cloud
            bread scenester YOLO gentrify, church-key wayfarers single-origin
            coffee umami. Disrupt fingerstache listicle keytar hella.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
