import React, {useState} from 'react'
import './adduser.css'


import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Adduser = () => {
    const [email, setemail] = useState('')
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')


    let navigate = useNavigate()
    let submit = (e) => {
        e.preventDefault()
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        if (!email || !fname || !lname) {

            alert('Please enter the required fields')
        } else if (email && ! regexEmail.test(email)) {
            alert('Enter a valid email')
        } else {
            let user = {
                email: email,
                first_name: fname,
                last_name: lname
            }
            axios.post('https://reqres.in/api/users', user).then((res) => {
                console.log(res)
                navigate('/userlist')

            }).catch((err) => {
                console.log(err)
            })
            setemail('')
            setfname('')
            setlname('')
        }
    }
    return (
        <div className='form'>
            <h2>Add User</h2>
            <hr/>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email}
                        type="email"
                        placeholder="Enter email"
                        autoComplete='off'
                        onChange={
                            (e) => setemail(e.target.value)
                        }/> {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */} </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicfirstname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control value={fname}
                        type="text"
                        placeholder="Enter your first name"
                        onChange={
                            (e) => setfname(e.target.value)
                        }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fo">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control value={lname}
                        type="text"
                        placeholder="Enter your last name"
                        onChange={
                            (e) => setlname(e.target.value)
                        }/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button onClick={submit}
                        variant="primary"
                        type='submit'
                        size="lg">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}


export default React.memo(Adduser)
