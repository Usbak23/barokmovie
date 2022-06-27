import { Navbar, Container, Nav } from "react-bootstrap"


const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/"> MUBAROK MOVIE'S </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#discover">DISCOVERY</Nav.Link>
                    
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar