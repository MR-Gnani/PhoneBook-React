import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {

  let[keyword, setKeyword]=useState("");
  let dispatch = useDispatch();
  let {contact} = useSelector((state)=>state);

  const searchName = ()=>{
    dispatch({type: "SEARCH_NAME", payload: {keyword}})
  }

  const handleKeyPress = (e)=>{
    if (e.key === 'Enter') {
      searchName();
    }
  }
  return (
    <Row>
      <Col lg={10}>
        <Form.Control 
        type="text" placeholder='이름을 입력해주세요.' value={keyword}
        onChange={(e)=>setKeyword(e.target.value)} onKeyUp={handleKeyPress}/>
      </Col>
      <Col lg={2}>
        <Button onClick={searchName}>찾기</Button>
      </Col>
    </Row>
  )
}

export default SearchBox
