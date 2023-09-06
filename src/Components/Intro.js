import { Col, Container, Row, Button } from "react-bootstrap"
const Intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white d-flex text-center justify-content-center align-items-center'>
        <Row>
        <Col Col>
            <div className='title'> Nonton Gratis</div>
            <div className='title'> Selamat Menonton</div>
            <div className="IntroButton mt-4 text-center">
                <Button> Liat Semua List</Button>
            </div>
        </Col>
        </Row>
        </Container> 
        </div>


    )
}

export default Intro