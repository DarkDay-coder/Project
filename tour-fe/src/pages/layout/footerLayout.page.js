import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const siteList = [
   {
      text: 'Our Stories',
      link: '#',
   },
   {
      text: 'Feedback',
      link: '#',
   },
   // {
   //    text: 'Famous Destinations',
   //    link: '#',
   // },
   // {
   //    text: 'Support Forums',
   //    link: '#',
   // },
];

const useList = [
   {
      text: 'About Us',
      link: '#',
   },
   // {
   //    text: 'Guide List',
   //    link: '#',
   // },
   {
      text: 'Contact Us',
      link: '#',
   },
   // {
   //    text: 'Terms & Conditions',
   //    link: '#',
   // },
   // {
   //    text: 'Privacy Policy',
   //    link: '#',
   // },
];

const socialList = [
   {
      text: 'Facebook',
      link: '#',
   },
   // {
   //    text: 'Twitter',
   //    link: '#',
   // },
   // {
   //    text: 'Instagram',
   //    link: '#',
   // },
   // {
   //    text: 'YouTube',
   //    link: '#',
   // },
   {
      text: 'WhatsApp',
      link: '#',
   },
   // {
   //    text: 'Viber',
   //    link: '#',
   // },
];

const supportList = [
   {
      text: 'Help Center',
      link: '#',
   },
   {
      text: 'Connect with us',
      link: '#',
   },
   // {
   //    text: 'Talk to Guide',
   //    link: '#',
   // },
   // {
   //    text: 'Contact Support',
   //    link: '#',
   // },
];

const Footer = () => {
   return (
      <Container className="parent container ">
         <div className="news-footer-wrap fixed">
            <div className="news-letter py-1 pb-0">
               <div className="container">
                  <div className="section-wrapper pb-3">
                     <div className="news-title">
                        <h4 className="text-white">
                           Want Us To Email You About Special Offers And
                           Updates?
                        </h4>
                     </div>
                     <div className="news-form">
                        <Form action="/">
                           <div className="nf-list">
                              <input
                                 type="email"
                                 name="email"
                                 placeholder="Enter Your Email"
                              />
                              <Button
                                 // TODO:
                                 type="submit"
                                 className="btn-secondary "
                                 name="submit"
                              >
                                 Subscribe
                                 <i className="icofont-send-mail"></i>
                              </Button>
                           </div>
                        </Form>
                     </div>
                  </div>
               </div>
            </div>

            <footer>
               <div className="footer-top py-1">
                  <div className="container">
                     <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                        <div className="col">
                           <div className="footer-item">
                              <div className="footer-inner">
                                 <div className="footer-content">
                                    <div className="title">
                                       <h4>Site Map</h4>
                                    </div>
                                    <div className="content">
                                       <ul className="lab-ul">
                                          {siteList.map((val, i) => (
                                             <li key={i}>
                                                <a href={val.link}>
                                                   {val.text}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="footer-item">
                              <div className="footer-inner">
                                 <div className="footer-content">
                                    <div className="title">
                                       <h4>Useful Links</h4>
                                    </div>
                                    <div className="content">
                                       <ul className="lab-ul">
                                          {useList.map((val, i) => (
                                             <li key={i}>
                                                <a href={val.link}>
                                                   {val.text}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="footer-item">
                              <div className="footer-inner">
                                 <div className="footer-content">
                                    <div className="title">
                                       <h4>Social Contact</h4>
                                    </div>
                                    <div className="content">
                                       <ul className="lab-ul">
                                          {socialList.map((val, i) => (
                                             <li key={i}>
                                                <a href={val.link}>
                                                   {val.text}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="footer-item">
                              <div className="footer-inner">
                                 <div className="footer-content">
                                    <div className="title">
                                       <h4>Our Support</h4>
                                    </div>
                                    <div className="content">
                                       <ul className="lab-ul">
                                          {supportList.map((val, i) => (
                                             <li key={i}>
                                                <a href={val.link}>
                                                   {val.text}{' '}
                                                </a>
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom py-1">
                  <div className="container">
                     <div className="section-wrapper">
                        <p>
                           &copy; 2022 <Link to="/">Local Tour Guide</Link>
                           Developed by
                           <a href="https://github.com/DarkDay-coder">
                              Sibu Dhital
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
      </Container>
   );
};

export default Footer;
