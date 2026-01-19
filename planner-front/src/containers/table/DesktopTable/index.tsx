import { Table } from "react-bootstrap";

const DesktopTable = () => {
    return (
        <div className="d-none d-md-block">
            <Table striped bordered hover variant="dark" responsive="lg" className="table-responsive">
                <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Local</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default DesktopTable;