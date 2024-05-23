import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Getapi = () => {
    const [alldata, setalldata] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        viewdata();
    })

    const viewdata = () => {
        axios.get('http://localhost/api_block/get_api.php').then(function (response) {
            // handle success
            setalldata(response.data);
        })
    }
    const handelDelete = (e) => {
        var id = e.target.getAttribute('data-id');

        const params = new FormData();
        params.set('id', id);

        axios.post('http://localhost/api_block/Delete_api.php', params).then(function (response) {
            // handle success
            if (response.status == 200) {
                alert("data delete successfully");
                viewdata();

            }
        })
    }
    const handelEdit = (e) => {
        var id = e.target.getAttribute('data-id');
        navigate('/edit/' + id);
    }
    return (
        <>
            <table border="2" cellPadding="50" >
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Product</th>
                    <th>delete</th>
                    <th>Edit</th>
                </tr>
                {
                    alldata.map((obj) => {
                        return (
                            <>
                                <tr>
                                    <td>{obj.id}</td>
                                    <td>
                                        <img src={`http://localhost/api_block/assets/image/${obj.image}`} width="100" alt="" />
                                        ${obj.image}
                                    </td>
                                    <td>{obj.product_name}</td>
                                    <td>{obj.price}</td>
                                    <td>
                                        <button type='button' data-id={obj.id} onClick={handelDelete}>Delete</button>
                                    </td>
                                    <td>
                                        <button type='button' data-id={obj.id} onClick={handelEdit}>Edit</button>
                                    </td>
                                </tr>
                            </>
                        );
                    })
                }
            </table>
        </>
    )
}

export default Getapi;
