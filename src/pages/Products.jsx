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
    const deleteProduct = product => {
        console.log('❌:', product);
        const filteredProductsArray = products.filter(p => p.id !== product.id);
        setProducts(filteredProductsArray);
    };

    return (
        <>
            <h1 className="display-3">Productos</h1>
            <Form />
            <Table
                products={products}
                deleteProduct={deleteProduct}
            />
        </>
    );
};

export default Products;
