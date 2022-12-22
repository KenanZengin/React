
import {useState} from 'react';
import {useEffect} from 'react';

 const formValues= {fullname:'',phone_number:''};

function Form({addContact,contacts}) {
  
  const [form,setForm] = useState(formValues);

  useEffect(()=>{
    setForm(formValues);
  },[contacts]);

  const onChangeInput = (e)=>{ 
    setForm({...form,[e.target.name]:e.target.value})
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    if (form.fullname === "" || form.phone_number ==="") {
      return false;      
    }
    addContact([...contacts,form]);
   
    //setForm({fullname:'',phone_number:''}); //girdileri 0'lamak için 1.yol
    // setForm(initialFormValues);girdileri 0'lamak için 2.yol
  }
  return (
    <>


    <form onSubmit={onSubmit}>
      <div>
          <input name='fullname' placeholder='Full Name' onChange={onChangeInput} value={form.fullname}/>
        </div>

        <div>
          <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number} />
        </div>

        <div className='btn'>
          <button>Add</button>
        </div>

    </form>
      

    </>
  )
}

export default Form;