import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const View_data = () => {
  const [alldata, setalldata] = useState();
  useEffect(() => {
    axios.get('http://localhost/api_block/get_api.php').then(function (response) {
      // handle success
      setalldata(response.data);
    })
  })
  return (
    <>
      <div className="image_blobk">
        <div className="container">
          <div className="image_block_inner">
            {
              alldata && alldata.map((obj) => {
                return (
                  <>
                    <div className="image_outer">
                      <div className="image_inner">
                        <div className="image">
                          <img className="image_1" src={`http://localhost/api_block/assets/image/${obj.image}`} alt="" />
                          <img className="image_2" src="assets/image/002.jpg" alt="" />
                        </div>
                        <div className="quick_view">
                          <Link>Quick View</Link>
                        </div>
                        <p>
                          Simple Women's Regular Top
                        </p>
                        <span>
                          $123.75
                        </span>
                        <Link>Add to cart</Link>
                      </div>
                    </div>
                  </>
                );
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default View_data;
