import { Table } from "react-bootstrap";
import Register from "./Register";
import { RecordResponse } from "../../../api/record/model";

interface Props{
    recordResponse : RecordResponse | undefined;
}

const MobileTable = ({recordResponse} : Props) =>{
    return (
        <div className="d-md-none">
            <Table striped bordered hover responsive="lg" className="table-responsive">
            <tbody>
                {
                    recordResponse?.content.map((reg, index) => (
                        <tr key={index}>
                            <td><Register record={reg}/></td>
                        </tr>     
                    ))}
                
            </tbody>
        </Table>
        </div>
    )
}

export default MobileTable;