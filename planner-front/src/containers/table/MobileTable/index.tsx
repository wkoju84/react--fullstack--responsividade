import { Table } from "react-bootstrap";
import Register from "./Register";

const MobileTable = () =>{
    return (
        <div className="d-md-none">
            <Table striped bordered hover responsive="lg" className="table-responsive">
            <tbody>
                <tr>
                    <td><Register/></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default MobileTable;