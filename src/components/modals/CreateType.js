import React, { useContext, useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { Context } from "../..";

const CreateType = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState(''); 
    const addType = () => {
        device.types.push({id: device.types.length+1, name:value});
        onHide();
        setValue('');
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
                    Добавить тип товара
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)} 
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateType;