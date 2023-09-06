import { Card, Container, Row, Image, Col, md} from "react-bootstrap"
import BatmanImages from "../assets/images/Superhero/Batman.jpeg"
import antmanImages from "../assets/images/Superhero/antman 3.jpg"
import avengerImages from "../assets/images/Superhero/avenger.jpeg"
import sperdimenImages from "../assets/images/Superhero/Sperdimen.jpg"
import supermenImages from "../assets/images/Superhero/supermen.jpeg"
import Robin from "../assets/images/Superhero/Robinhood.jpeg"
const Trending = () => {
    return (
        <div>
        <Container>
          <br/>
            <h1 className="text-white">TRENDING MOVIES</h1>
         <br/>
            <Row>
                <Col md={4} className="movirWrapper" id="Trending">
                    <Card className="text-white text-center movieImage">
                     <Image src={BatmanImages} alt="Batman" className="nama"/>
                       <Card.Title className="text-dark">Batman</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     etika Riddler, seorang pembunuh berantai yang sadis mulai membunuh tokoh-tokoh politik penting di Gotham, Batman dituntut untuk menyelidiki korupsi tersembunyi di kota itu dan mempertanyakan keterlibatan keluarganya.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated  7 days ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={antmanImages} alt="Batman" className="saya"/>
                       <Card.Title className="text-dark">ANT MAN</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     Dengan setelan kostum berkemampuan luar biasa untuk mengecilkan diri dalam skala ekstrim dan meningkatkan kekuatan, Scott yang dulu adalah seorang pencuri ahli, kini berubah menjadi sosok superhero
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 3 dasy ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={avengerImages} alt="Batman" className="yaya" />
                       <Card.Title className="text-dark">Avengers The Kang Dynasty</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     hang Chi memiliki kekuatan yang luar biasa dan disebut-sebut sebagai salah satu karakter yang patut diperhitungkan. Namun anehnya, Shang Chi ternyata tidak bergabung dengan Avengers karena alasan tertentu.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 3 month ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={sperdimenImages} alt="Batman" className="nama" />
                       <Card.Title className="text-dark">Sperdimen</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     Pertama kalinya dalam sejarah layar lebar Spider-Man, identitas asli dari pahlawan nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya, dan menempatkan semua orang terdekatnya dalam posisi paling terancam
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 2 month ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={supermenImages} alt="Batman" className="kamu" />
                       <Card.Title className="text-dark">Supermen</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     Setelah lama di ruang angkasa, mencari sisa-sisa planet Krypton, Superman kembali ke Bumi. Dia merindukan Lois Lane, yang hidup bersama Richard White dan memiliki seorang putra.
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 1  ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
                <Col md={4} className="movirWrapper">
                    <Card className="text-white text-center movieImage">
                     <Image src={Robin} alt="Batman" className="DIA" />
                       <Card.Title className="text-dark">ROBINHOOD</Card.Title>
                     <div className="bg-dark">
                        <div className="p-2 m-1">
                     <Card.Text className="text-left">
                     Robin Hood (Taron Egerton) sebagai tentara salib kembali ke negerinya dalam keadaan yang berbeda. Ia menemukan pejabat korup dan menghabiskan uang kerajaan sementara rakyat dalam keadaan sengsara. Bersama Little John (Jamie Foxx) Ia melawan tirani Inggris yang sangat kuat
                      </Card.Text>
                      <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                       </div>
                      </div>
                      </Card>
                </Col>
            </Row>
        </Container>     
    </div>
        
    )
}
export default Trending