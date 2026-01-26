import { Table } from "react-bootstrap";
import { RecordResponse } from "../../../api/record/model";
import Register from "./Register";

interface Props {
    recordResponse: RecordResponse | undefined;
}

const DesktopTable = ({recordResponse} : Props) => {
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
                    {
                        recordResponse?.content.map((reg, index) => (
                            <tr key={index}>
                                <Register record={reg}/>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default DesktopTable;