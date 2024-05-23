import React, { useEffect, useRef } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editapi = () => {
    const handelImage = useRef();
    const handelproduct_name = useRef();
    const handelPrice = useRef();

    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        const params = new FormData();
        params.set('id', id);

        axios.post('http://localhost/api_block/Edit_api.php', params).then(function (response) {
            // handle success
            if (response.status == 200) {
                console.log(response.data);
                var data = response.data;

                handelproduct_name.current.value = data['product_name'];
                handelPrice.current.value = data['price'];
            }
        })
    })

    const handelSubmit = (e) => {
        e.preventDefault();
        var image = handelImage.current.files[0];
        var product = handelproduct_name.current.value;
        var price = handelPrice.current.value;

        const params = new FormData();
        params.set('id', id);
        params.set('image', image);
        params.set('product_name', product);
        params.set('price', price);

        axios.post('http://localhost/api_block/update_api.php', params).then(function (response) {
            // handle success
            if (response.status == 200) {
                alert("data insert successfully");
                navigate('/');
            }
        })
    }

    return (
        <form method="POST" onSubmit={handelSubmit}>
            <table border="2" cellSpacing="0" cellPadding="7">
                <tr>
                    <td>
                        <label for="image">Image</label>
                    </td>
                    <td>
                        <input type="file" name="image" ref={handelImage} />
                        <img src={`http://localhost/api_block/assets/image/$(image)}`} width={100} height={100} alt="" />
                        <input type="hidden" name="oldimage" />
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

export default Editapi;
