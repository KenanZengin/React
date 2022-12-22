
import List from './list';
import Form from './forn';
import  './style.css'
import {useState,useEffect} from "react";
function Contacts() {
  const [contacts,setContacts] = useState([
    {fullname:"kenan",phone_number:"12345"},
    {fullname:"bilal",phone_number:"6789"},
    {fullname:"bahadır",phone_number:"101112"}
  ]);
  
  useEffect(()=>{
    console.log(contacts);
  },[contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form  addContact={setContacts} contacts={contacts} />

    </div>
  )
}

export default Contacts;