import React, { useEffect } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/action';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProductCards = () => {
    const dispatch = useDispatch();
    const data = useSelector((store)=>store.products)
    const [searchParams,setSearchParams] = useSearchParams()
    const location = useLocation();
    let productsData = data.products
    useEffect(()=>{
if(location || productsData.length === 0){
    const brand = searchParams.getAll("brand");
    const queryParam = {
        params : {
           brand : brand,
        _sort:searchParams.get("sortBy") && "mrp.mrp",
        _order:searchParams.get("sortBy"), 
        }
    }
dispatch(getProducts(queryParam))
}
    },[location.search])
  
  console.log(productsData)  
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
      {productsData?.map((prod, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <Link to={`/products/${prod.id}`}>
          <Item >
            
            <Box color="red " border="1px solid grey" >GET 43% OFF</Box>
            <img src="https://aggie-horticulture.tamu.edu/wp-content/uploads/sites/10/2011/10/tomato1.jpg" alt="image" width="80%"/>
            <h6>{prod.brand}</h6>
          <h6>{prod.name}</h6>
      <h6>{prod.mrp.mrp}</h6>
          </Item>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default ProductCards