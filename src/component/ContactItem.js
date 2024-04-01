import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='contactsInfo'>
      <Col lg={1}>
        <img 
        width={50}
        src='https://i.namu.wiki/i/PDIsal3_2G4QFn9Na_ExX3zV4nzuRN-SMkQsvvj0BXHLLeaFB7ZLucdC3Bya1nc4PASrE-fSv6X8HEAAxsirwA.svg' alt=""/>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  )
}

export default ContactItem
