import { Card, Container, Row, Image, Col, md} from "react-bootstrap"
import Kkndesapenasi from "../assets/images/Tranding/KKN DESA PENARI.jpg"
import Gitacintasma from "../assets/images/Tranding/Gita Sma.jpg"
import Buyahamka from "../assets/images/Tranding/Buya hamka.jpeg"
import Khanzab from "../assets/images/Tranding/Khanzab.jpg"
import magrib from "../assets/images/Tranding/waktu magrib.jpg"
import qorin from "../assets/images/Tranding/Qorin.jpg"
const Superhero = () => {
    return (
        <div>
        <Container>
          <br/>
            <h1 className="text-white">Drama Indonesia</h1>
         <br/>
            <Row>
                <Col md={4} className="movirWrapper" id="Superhero">
                    <Card className="text-white text-center movieImage">
                     <Image src={Kkndesapenasi} alt="KKN DESA PENARI" className="sita"/>
                       <Card.Title className="text-dark">KKN DESA PENARI</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     KKN Di Desa Penari diadaptasi dari salah satu cerita horror yang telah viral di tahun 2019 melalui Twitter, menurut sang penulis, cerita ini diambil dari sebuah kisah nyata sekelompok mahasiswa yang tengah melakukan program KKN (Kuliah Kerja Nyata) di Desa Penari. Tak berjalan mulus, serentetan pengalaman horror pun menghantui mereka hingga program KKN tersebut berakhir tragis
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 15 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={Gitacintasma} alt="Gita sma" className="aku" />
                       <Card.Title className="text-dark">GITA CINTA SMA</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 20 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={Buyahamka} alt="Buyahamka" className="aku" />
                       <Card.Title className="text-dark">BUYA HAMKA</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 25 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={Khanzab} alt="Khanzab" className="aku" />
                       <Card.Title className="text-dark">KHANZAB</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 10 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={magrib} alt="Batman" className="aku" />
                       <Card.Title className="text-dark">WAKTU MAGRIB</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 5 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={qorin} alt="Batman" className="kitasama" />
                       <Card.Title className="text-dark">QORIN</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     Satu persatu penghuni asrama putri kerasukan. Zahra dan Yolanda berusaha mengungkap keganjilan yang terjadi pada teman-teman mereka, sampai pada satu malam, semua Jin Qorin penghuni asrama putri bangkit mengancam nyawa.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 22 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
            </Row>
        </Container>     
    </div>
        
    )
}
export default Superhero