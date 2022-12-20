import './userlist.css'
import axios from 'axios'


import React, {useState, useEffect} from 'react'
import {Table, Image} from 'react-bootstrap'

const Userlist = () => {
    const [userinfo, setuserinfo] = useState([])
    useEffect(() => {

        axios.get('https://reqres.in/api/users').then((res) => {
            setuserinfo(res ?. data ?. data)
            // console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])


    return (
        <div className='table'>

            <h2>User list</h2>
            <hr/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> {
                    userinfo.map((user) => (
                        <tr>
                            <td>
                                <Image height={60}
                                    rounded
                                    src={
                                        user ?. avatar
                                }></Image>
                            </td>
                            <td>{
                                user ?. id
                            }</td>
                            <td>{
                                user ?. first_name + " " + user ?. last_name
                            }</td>
                            <td>{
                                user.email
                            }</td>
                        </tr>
                    ))
                } </tbody>
            </Table>
        </div>
    )
}
export default React.memo(Userlist)
