import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return(
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                style={{cursor: 'pointer'}}
                key={brand.id}
                border={brand.id === device.selectedBrand ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand(brand)} 
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});
export default BrandBar;