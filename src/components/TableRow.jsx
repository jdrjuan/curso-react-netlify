
const TableRow = (props) => {
    const {product} = props;
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

                <button className="btn btn-sm btn-info">
                    Ver
                </button>

                <button className="btn btn-sm btn-warning">
                    Modificar
                </button>

                <button className="btn btn-sm btn-danger">
                    Eliminar
                </button>

            </td>
        </tr>
    );
};

export default TableRow;
