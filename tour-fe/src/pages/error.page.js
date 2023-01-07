import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavBar from '../component/user/user.Navbar.component';
import '../assets/style/error.page.css';

// const title = 'Error 404!';
// const desc =
//    'Oops! The Page You Are Looking For Could Not Be Found On Our Server...!!';
// const btnText = 'Go Back To Home';

const ErrorPage = () => {
   return (
      <Container className="body">
         <NavBar />
         <div className="link-container">
            <NavLink to="/" className="more-link">
               Return to Homepage
            </NavLink>
         </div>
         <h1>404 Error Page</h1>
         <p className="zoom-area">
            Looks like the page doesn't exist on our server
         </p>
         <Container className="error-container">
            <span>4</span>
            <span>
               <span className="screen-reader-text">0</span>
            </span>
            <span>4</span>
         </Container>

         {/* <div className="four-zero-section padding-tb section-bg">
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
                  </div>
               </div>
            </div>
         </div> */}
      </Container>
   );
};

export default ErrorPage;
