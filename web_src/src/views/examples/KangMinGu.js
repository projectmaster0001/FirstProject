import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import Header from 'components/Headers/Header'

const KangMinGu = () => {

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">KANG MIN GU</h3>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="3" md="6">TEST</Col>
                  <Col lg="3" md="6">TEST</Col>
                  <Col lg="3" md="6">TEST</Col>
                  <Col lg="3" md="6">TEST</Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default KangMinGu
