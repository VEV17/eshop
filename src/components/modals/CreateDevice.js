import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = observer( ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const addInfo = () => {
        setInfo([...info, { title: '', desc: '', num: Date.now() }]);
    }
    const removeInfo = (num) => {
        setInfo(info.filter(i => i.num !== num));
    }
    const selectFile = e => {
        setFile(e.target.files[0]);
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
                        <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        className="mt-3"
                        placeholder="Введите наименование"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите цену"
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Загрузите изображение"
                        type="file"
                        value={file}
                        onChange={selectFile}
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
} );
export default CreateDevice;