import { useEffect, useState } from "react";
import { getRecords } from "../../api/record";
import { RecordResponse } from "../../api/record/model";

import { Col, Container, Row } from "react-bootstrap";
import DesktopTable from "../table/DesktopTable";
import MobileTable from "../table/MobileTable";


const Home = () => {

    const [recordResponse, setRecordResponse] = useState<RecordResponse>();

    useEffect(() => {
        const returnedRecords = async () => {
            try{
                setRecordResponse(await getRecords());
            } catch (error){
                console.log(`erro: ${error}`)
            }
        }
        returnedRecords();
    }, [])

    return (
        <Container>
            <Row className="justify-content-mb-center">
                <Col xs lg="12" className="mb-3">
                    <DesktopTable recordResponse={recordResponse}/>
                    <MobileTable recordResponse={recordResponse}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;