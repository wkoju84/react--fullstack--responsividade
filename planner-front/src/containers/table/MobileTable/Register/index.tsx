import { Card, ListGroup } from "react-bootstrap";

const Register = () => {
    return (
        <Card bg="dark" text="white">
            <Card.Body>
                <Card.Title>Serviço</Card.Title>
                <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>Data: </ListGroup.Item>
                <ListGroup.Item>Hora: </ListGroup.Item>
                <ListGroup.Item>Local: </ListGroup.Item>
                <ListGroup.Item>Cliente: </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default Register;