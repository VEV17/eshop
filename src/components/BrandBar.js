import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return(
        <Form className="d-flex">
            {device.brands.map(brand =>
                <Card
                className="mx-1"
                style={{cursor: 'pointer', padding:10, }}
                key={brand.id}
                bg="info"
                border={brand.id === device.selectedBrand.id ? 'danger' : 'info'}
                onClick={ () => device.setSelectedBrand(brand) }
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});
export default BrandBar;