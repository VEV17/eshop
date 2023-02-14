import React, { useContext, useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { Context } from "../..";

const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState(''); 
    const addBrand = () => {
        device.brands.push({id: device.brands.length+1, name:value});
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
                    Добавить брэнд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название брэнда"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateBrand;