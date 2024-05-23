import React, { useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Insertapi = () => {
    const handelImage = useRef();
    const handelproduct_name = useRef();
    const handelPrice = useRef();

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        var image = handelImage.current.files[0];
        var product = handelproduct_name.current.value;
        var price = handelPrice.current.value;

        const params = new FormData();
        params.set('image', image);
        params.set('product_name', product);
        params.set('price', price);

        axios.post('http://localhost/api_block/insert_api.php', params).then(function (response) {
            // handle success
            if (response.status == 200) {
                alert("data insert successfully");
                navigate('/');
            }
        })
    }

    return (
        <form method="POST" onSubmit={handelSubmit}>
            <table border="2" cellSpacing="0" cellPadding="50">
                <tr>
                    <td>
                        <label for="image">Image</label>
                    </td>
                    <td>
                        <input type="file" name="image" ref={handelImage} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="product_name">product_name</label>
                    </td>
                    <td>
                        <input type="text" name="product_name" placeholder='Enter Product name.....' ref={handelproduct_name} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="price">price</label>
                    </td>
                    <td>
                        <input type="text" name="price" placeholder='Enter product price.....' ref={handelPrice} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" name="submit" value="submit" />
                    </td>
                </tr>
            </table>
        </form>
    )
}

export default Insertapi;
