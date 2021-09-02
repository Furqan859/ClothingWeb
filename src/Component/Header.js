import { Form, FormControl, Nav, Navbar , Button} from "react-bootstrap";


const Headers= () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="test-align:center">Clothing Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    <Nav.Link href="#action2">Men</Nav.Link>
                    <Nav.Link href="#action2">Women</Nav.Link>
                    <Nav.Link href="#action2">Boys</Nav.Link>
                    <Nav.Link href="#action2">Girls</Nav.Link>


                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export  default Headers;