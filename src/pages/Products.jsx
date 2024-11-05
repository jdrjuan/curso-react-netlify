import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { productList } from "../constants/productList";

const Products = () => {

    const [products, setProducts] = useState(productList);

    // CRUD -> C:CREATE -> POST
    const createProduct = newProduct => {

    };

    // CRUD -> U:UPDATE -> PUT
    const updateProduct = () => {

    };
    
    // CRUD -> D:DELETE -> DELETE
    const deleteProduct = () => {

    };

    return (
        <>
            <h1 className="display-3">Productos</h1>
            <Form />
            <Table products={productList} />
        </>
    );
};

export default Products;
