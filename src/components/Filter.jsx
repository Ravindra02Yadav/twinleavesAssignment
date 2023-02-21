import { Box, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const [brand, setBrand] = useState(searchParams.getAll("brand") || [])
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");
    const handleFilter = (e) =>{
        let option = e.target.value;
        let newBrand = [...brand];
        if(newBrand.includes(option)){
            newBrand.splice(newBrand.indexOf(option),1)
        }
        else{
            newBrand.push(option)
        }
        setBrand(newBrand)
    }
    const handleSort = (e) =>{
        setSortBy(e.target.value)
        }
    useEffect(()=>{
const params = {};
brand && (params.brand = brand)
sortBy && (params.sortBy = sortBy)
setSearchParams(params);
    },[brand, setSearchParams, sortBy])
    console.log(brand)
  return (
    <Box textAlign="left" p="1rem" >
                <h4>Category</h4>
        <Divider color = "#84c225" width="40%" />
        <Divider color = "#84c225" width="40%" />
        <Divider />
        <Box lineHeight="2rem">

      <div>
        <input type="radio" value="asc" name="sortBy" onClick={handleSort} defaultChecked={sortBy == "asc"} />
        <label>INCREASING</label>
      </div>
      <div>
        <input type="radio" value="desc" name="sortBy" onClick={handleSort} defaultChecked={sortBy == "desc"} />
        <label>DESCRING</label>
      </div>
     
       
    </Box>
        <Box >
     
    </Box>
        <h4>Brands</h4>
        <Divider color = "#84c225" width="40%" />
        <Divider color = "#84c225" width="40%" />
        <Divider />
        <Box height="50vh" overflow="scroll" lineHeight="2rem">
      <div>
        <input type="checkbox" value="PITAMBARI" onChange={handleFilter} defaultChecked={brand.includes("PITAMBARI")} />
        <label>PITAMBARI</label>
      </div>
      <div>
        <input type="checkbox" value="BINGO" onChange={handleFilter} defaultChecked={brand.includes("BINGO")} />
        <label>BINGO</label>
      </div>
      <div>
        <input type="checkbox"  value="BISKFARM" onChange={handleFilter} defaultChecked={brand.includes("BISKFARM")} />
        <label>BISKFARM</label>
      </div>
      <div>
        <input type="checkbox" value="NESTLE" onChange={handleFilter} defaultChecked={brand.includes("NESTLE")} />
        <label>NESTLE</label>
      </div>
      <div>
        <input type="checkbox" value="BOURBON" onChange={handleFilter} defaultChecked={brand.includes("BOURBON")} />
        <label>BOURBON</label>
      </div>
      <div>
        <input type="checkbox" value="VIM" onChange={handleFilter} defaultChecked={brand.includes("VIM")} />
        <label>VIM</label>
      </div>
      <div>
        <input type="checkbox" value="SUNFEAST" onChange={handleFilter} defaultChecked={brand.includes("SUNFEAST")} />
        <label>SUNFEAST</label>
      </div>
      <div>
        <input type="checkbox" value="PARACHUTE" onChange={handleFilter} defaultChecked={brand.includes("PARACHUTE")} />
        <label>PARACHUTE</label>
      </div>
      <div>
        <input type="checkbox" value="ANNAPOORNA" onChange={handleFilter} defaultChecked={brand.includes("ANNAPOORNA")} />
        <label>ANNAPOORNA</label>
      </div>
      <div>
        <input type="checkbox" value="AXE" onChange={handleFilter} defaultChecked={brand.includes("AXE")} />
        <label>AXE</label>
      </div>
      <div>
        <input type="checkbox" value="ANNAPOORNA" onChange={handleFilter} defaultChecked={brand.includes("ANNAPOORNA")} />
        <label>ANNAPOORNA</label>
      </div>
      <div>
        <input type="checkbox" value="ANNAPOORNA" onChange={handleFilter} defaultChecked={brand.includes("ANNAPOORNA")} />
        <label>ANNAPOORNA</label>
      </div>
      <div>
        <input type="checkbox" value="ANNAPOORNA" onChange={handleFilter} defaultChecked={brand.includes("ANNAPOORNA")} />
        <label>ANNAPOORNA</label>
      </div>
    </Box>
    </Box>
  )
}

export default Filter