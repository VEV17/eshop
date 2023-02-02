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
                style={{cursor: 'pointer'}}
                key={brand.id}
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