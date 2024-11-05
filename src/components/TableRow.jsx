import Swal from "sweetalert2";

const TableRow = props => {
    const {product, deleteProduct} = props;

    const handleClickBtnDeleteProduct = product => {
        Swal.fire({
            title: `¿Estás seguro de que querés eliminar el producto ${product.name}?`,
            text: "¡Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#777",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product);
                Swal.fire({
                    position: "top-end",
                    title: "Producto eliminado",
                    text: `El producto ${product.name} fue eliminado con éxito.`,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    title: "Operación cancelada",
                    text: `El producto ${product.name} no fue eliminado.`,
                    icon: "info",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src={product.imageUrl} alt={product.name} width="50" />
            </td>
            <td>

                <button className="btn btn-sm btn-info me-2">
                    Ver
                </button>

                <button className="btn btn-sm btn-warning me-2">
                    Modificar
                </button>

                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleClickBtnDeleteProduct(product)}
                >
                    Eliminar
                </button>

            </td>
        </tr>
    );
};

export default TableRow;
