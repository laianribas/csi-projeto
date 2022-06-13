import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

function OffcanvasExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
        <Container fluid>
          <nav className="justify-content-start flex-grow-1 pe-3">
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
            </Navbar.Offcanvas>

            <Navbar.Brand href="#">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />{' '}
              Chamados CSI
            </Navbar.Brand>
          </nav>
        </Container>
      </Navbar>
    </>
  )
}

export default OffcanvasExample
