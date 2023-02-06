import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, { title: '', desc: '', num: Date.now() }]);
    }
    const removeInfo = (num) => {
        setInfo(info.filter(i => i.num !== num));
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите наименование"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите цену"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Загрузите изображение"
                        type="file"
                    />
                    <hr />
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    > Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.num}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите значение свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.num)}
                                    variant="outline-danger">
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateDevice;