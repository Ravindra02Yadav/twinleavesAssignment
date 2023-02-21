import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Filter from '../components/Filter';
import { getProducts } from '../Redux/action';
import ProductCards from './ProductCards';



const Product = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


  return (
<Grid container spacing={2} columns={16}>
  <Grid item xs={4}>
    <Item><Filter /></Item>
  </Grid>
  <Grid item xs={12}>
    <Item>
  <ProductCards />
    </Item>
  </Grid>
</Grid>
  )
}

export default Product