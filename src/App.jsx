import React, { useEffect, useState } from 'react'

import Category from './category';
import axios from 'axios';

function App() {

  let [finalcat, setfinalcat]=useState([])
  let [finalprod, setfinalprod]=useState([])
  let [catname, setcatname]=useState("")
 
  let getcategory=()=>{
     axios.get("https://dummyjson.com/products/categories")
     .then((res)=>res.data)
     .then((finaldata)=>{
      setfinalcat(finaldata)
     })
   } 
   
  let getprod=()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>res.data)
    .then((finaldata)=>{
      setfinalprod(finaldata.products)
    })
  } 

  useEffect(()=>{
   getcategory();
   getprod();
  }, [])

  useEffect(()=>{
    if(catname!==""){
    axios.get(`https://dummyjson.com/products/category/${catname}`)
    .then((res)=>res.data)
    .then((finaldata)=>{
    setfinalprod(finaldata.products)
    })
    }
   
  },[catname])

  let pro=finalprod.map((v,i)=>{
    return(
      <Prod data={v} key={i}/>
    )
  })

  return (
   <div className='py-[40px]'>
    <div className='max-w-[1320px] mx-auto'>
      <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
      <div className='grid grid-cols-[30%_auto] gap-[20px]'>
        <div>
          <Category finalcat={finalcat} setcatname={setcatname}/>
        </div> 
        <div className='grid grid-cols-3 gap-5'>
          {finalprod.length>=1 ? pro : "No Products found."}
           
        </div>
         
      </div>
      
    </div>
    
   </div>
  )
}

export default App

function Prod({data}) {
  return(
    <div>
          <div className='shadow-lg pb-4 text-center mb-1'>
           <img src={data.thumbnail} className='w-[100%] h-[250px]'/>
           <h4>{data.title}</h4>
           <b>RS {data.price}</b>
          </div> 
     </div>
  )
}