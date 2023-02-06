import React from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import star2 from "../assets/star2.png";

const DevicePage = () => {
    const device = { id: 1, name: 'Redmi Note 10Pro', price: 20300, rating: 4.8, img: '' };
    const descrition = [
        {id:1, title:'Оперативная память', desc:'4Mb'},
        {id:2, title:'Дисплей', desc:'6.5 IPS, 1920x1640, 60Hz'},
        {id:3, title:'Процессор', desc:'SnapDragon 400X'},
        {id:4, title:'Ядер', desc:'4 * 1200MHz'},
        {id:5, title:'Память общая', desc:'64MB'},
        {id:6, title:'Аккумулятор', desc:'5400 mA*h'},
    ];
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${star2})`, width: 140, height: 140, backgroundSize: 'cover', fontSize: 54 }}
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width:300, height:300, fontSize:32, border:'5px solid light-gray'}}
                    >   
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>В корзину</Button>
                        
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {descrition.map((info, ind) =>
                    <Row key={info.id} style={{background: ind%2===0 ? 'lightgray': 'transparent', padding: 10}}>
                        {info.title}: {info.desc}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage;