import { Col, Container, Row } from "react-bootstrap";
import DesktopTable from "../table/DesktopTable";
import MobileTable from "../table/MobileTable";

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-mb-center">
                <Col xs lg="12" className="mb-3">
                    <DesktopTable/>
                    <MobileTable/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;