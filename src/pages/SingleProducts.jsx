import { Box, Button, Image, Text } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleProducts() {
    const {id}=useParams();
    const [data,setData]=useState({})
   

    useEffect(() => {
      axios.get(`https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products/${id}`)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err);
      })
    }, []);

// console.log(data)
    
    return (
      <>
        <h1>single page id : {id}</h1>

      </>
    );
}

export default SingleProducts;