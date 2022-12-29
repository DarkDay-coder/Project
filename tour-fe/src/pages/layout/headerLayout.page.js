import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './headerLayout.page.css';
const PageHeader = ({ title, curPage }) => {
   return (
      <div className="pageheader-section">
         <Container>
            <Row>
               <Col>
                  <div className="pageheader-content text-center">
                     <h2>{title}</h2>
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                           <li className="breadcrumb-item">
                              <Link to="/">Home</Link>
                           </li>
                           <li
                              className="breadcrumb-item active"
                              aria-current="page"
                           >
                              {curPage}
                           </li>
                        </ol>
                     </nav>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default PageHeader;
