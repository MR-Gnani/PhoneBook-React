import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img 
        width={50}
        src='https://i.namu.wiki/i/PDIsal3_2G4QFn9Na_ExX3zV4nzuRN-SMkQsvvj0BXHLLeaFB7ZLucdC3Bya1nc4PASrE-fSv6X8HEAAxsirwA.svg' alt=""/>
      </Col>
      <Col lg={10}>
        <div>나니</div>
        <div>010010010</div>
      </Col>
    </Row>
  )
}

export default ContactItem
