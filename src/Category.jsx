import React from 'react'

export default function Category({finalcat, setcatname}) {


  let cat=finalcat.map((v,i)=>{
    return(
       <li onClick={()=>setcatname(v.name)} className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] font-serif font-[500] mb-2 ' key={i}>{v.name}</li>
    )
   
  })
  
  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
       {cat}
      </ul>
    </div>
  )
}

// function Catdata({finalcat}) {
//   return(
//     <>
//     {finalcat.map((v,i)=>{
//   <li className='bg-[#ccc] p-[7px] cursor-pointer text-[18px] font-serif font-[500] mb-2 ' key={i}>{v[i].name}</li>
//     })}
   
//     </>
//   )
// }
