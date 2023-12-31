import { Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark"> 
            <Container>
                <Navbar.Brand href="/">HansFilm</Navbar.Brand>
                <Nav>
                <Nav.Link href="#Trending">Trending</Nav.Link>
                <Nav.Link href="#Superhero">Superhero</Nav.Link>
                </Nav>
            </Container>  
        </Navbar>
        </div>
    )
}

export default NavigationBar