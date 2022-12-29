import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../component/user/user.Navbar.component';

const title = 'Error 404!';
const desc =
   'Oops! The Page You Are Looking For Could Not Be Found On Our Server...!!';
const btnText = 'Go Back To Home';

const ErrorPage = () => {
   return (
      <Container>
         <NavBar />
         <div className="four-zero-section padding-tb section-bg">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-4 col-sm-6 col-12">
                     <div className="four-zero-content">
                        <Link to="/">
                           <Image src="" alt="Error 404 Image" />
                        </Link>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                        <Link to="/" className="lab-btn">
                           <span>
                              {btnText} <i className="icofont-home"></i>
                           </span>
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-8 col-sm-6 col-12">
                     <p> lorem ipsum ............ !!!</p>
                     {/* FIXME: TODO:  some interesting content for the user */}
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default ErrorPage;
