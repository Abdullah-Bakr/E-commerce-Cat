import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Header() {
  const { totalQuantity } = useCart();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Bella Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bella Store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  variant="underline"
                  className="justify-content-end flex-grow-1 pe-3"
                >
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/shop">
                    Shop Now
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact us
                  </Nav.Link>
                </Nav>
                <div className="d-flex gap-2 align-items-center">
                  <div className="cart-icon">
                    <Link to="/cart">
                      <FiShoppingCart
                        style={{ color: "yellow", fontSize: "25px" }}
                      />
                      {totalQuantity > 0 && (
                        <span
                          style={{
                            color: "white",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            fontSize: "14px",
                            minWidth: "22px",
                            minHeight: "22px",
                            textAlign: "center",
                            display: "inline-block",
                            border: "1px solid white",
                            margin: "0 0 0 5px",
                          }}
                        >
                          {totalQuantity}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
