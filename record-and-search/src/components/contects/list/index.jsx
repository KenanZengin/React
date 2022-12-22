import {useState} from 'react'

function List({contacts}) {
  const [filterText,setFilterText] = useState("");
  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return item[key] // return yerine süslü parentezleride kaldırabiliriz
              .toString()
              .toLowerCase()
              .includes(filterText.toLocaleLowerCase());
    });
  });

  
  return (
    <>
      
      <input placeholder='Filter contact' value={filterText}  onChange={(e)=>setFilterText(e.target.value)}/>

      <ul className='list'>
        {
        filtered.map((contac,i)=>(<li key={i}>
          <span>{contac.fullname}</span>
          <span>{contac.phone_number}</span>
          </li>))
        }
      </ul>
      <p>
        kayıt sayısı : ({filtered.length})
      </p>
    
    
    </>
  )
}

export default List;