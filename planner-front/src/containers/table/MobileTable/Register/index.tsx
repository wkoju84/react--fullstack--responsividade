import { Card, ListGroup } from "react-bootstrap";
import { Record } from "../../../../api/record/model";
import { formatDate, formatTime } from "../../../../util/date";

interface Props{
    record: Record;
}

const Register = ({record} : Props) => {
    return (
        <Card bg="dark" text="white">
            <Card.Body>
                <Card.Title>Serviço {record.service}</Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>Data: {formatDate(record.dateTime)}</ListGroup.Item>
                <ListGroup.Item>Hora: {formatTime(record.dateTime)}</ListGroup.Item>
                <ListGroup.Item>Local: {record.location}</ListGroup.Item>
                <ListGroup.Item>Cliente: {record.customer}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default Register;