import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form, Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex">
            {device.devices.map(dev =>
                <DeviceItem key={dev.id} device={dev} />
            )}
        </Row>
    );

});
export default DeviceList;