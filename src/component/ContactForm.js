import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName]=useState('')
    const [phoneNumber, setPhoneNumber]=useState(0)
    const dispatch = useDispatch();

    const addContact = (e)=>{
        e.preventDefault();
        dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}});
        setName("");
        setPhoneNumber("");
    };

  return (
    <div>
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e)=>setName(e.target.value)} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  );
}

export default ContactForm
