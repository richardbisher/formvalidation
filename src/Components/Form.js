import React from 'react'
import { useState } from 'react'
import './form.css'
// import { date } from 'yup'

const Form = () => {

  const initialErrors = {
    name: { required: false },
    email: { required: false },
    password: { required: false },
    phonenumber: { required: false },
    url: { required: false }, 
    date: { required: false },
    select: { required: false },
    textarea: { required: false },
    file: { required: false }, 
    accept: { required: false }, 
    accepttwo: { required: false }, 
    checkbox: { required: false },
    radio: { required: false },
    

  }

  const [errors, setErrors] = useState(initialErrors)
  const [input, setInput] = useState({

    name: "",
    email: "",  
    password: "", 
    phonenumber: "",
    url: "", 
    date: "", 
    textarea: "",
    file: "",
    select: "", 
    checkbox: "",
    accept:"",
    accepttwo:"", 
    radio:"",
  })

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let errors = initialErrors

    if (input.name === "") {
      errors.name.required = true
    }

    if (input.email === "") {
      errors.email.required = true
    }

    if (input.password === "") {
      errors.password.required = true
    }
    if (input.phonenumber === "") {
      errors.phonenumber.required = true
    } 
    if (input.url === "") {
      errors.url.required = true
    }
    if (input.date === "") {
      errors.date.required = true 
    }
    if (input.select === "") {
      errors.select.required = true 
    }
    if (input.textarea === "") {

      errors.textarea.required = true 
    }

    if (input.file === "") {  
      errors.file.required = true
    }

    if (input.accept === "") {
      errors.accept.required = true
      console.log('accept')
    }
    if (input.accepttwo === "") {
      errors.accepttwo.required = true
      console.log('accepttwo')
    }
    if (input.checkbox === "") {
      errors.checkbox.required = true
    }

    if (input.radio === "") {
      errors.radio.required = true
      
    }

    setErrors(errors )  ;
  };
  return (
    <div >
      <form onSubmit={handleSubmit}  className='container'>
       
       <div>
       <input type='text' name='name' placeholder='Enter your name'onChange={handleInput} className='inputbox'></input>
        {errors.name.required ? <p className='error'>Name is required</p>:null}
        <input type='password' name='password' placeholder='Enter your password' className='inputbox' onChange={handleInput}></input>
        {errors.password.required ? <p className='error'>password is required</p>:null}
        <input type='email' name='email' placeholder='Enter your email' className='inputbox' onChange={handleInput}></input>
        {errors.email.required ? <p className='error'>email is required</p>:null}
      
        <input type='number' name='phonenumber' placeholder='Enter your phone number' className='inputbox' onChange={handleInput}></input>
        {errors.phonenumber.required ? <p className='error'>phone number is required</p>:null}
        <input type='url' name='url' placeholder='Enter your url' className='inputbox' onChange={handleInput}></input>
        {errors.url.required ? <p className='error'>url is required</p>:null}

        <input type='date' name='date' className='inputbox' onChange={handleInput}></input>
        {errors.date.required ? <p className='error'>date is required</p>:null}

        <select className='inputbox'>
        <option value='select' className='inputbox' onChange={handleInput}>select your language</option>
                    <option value='option1'>Hindi</option>    
                    <option value='option2'>English</option>
                    <option value='option3'>Tamil</option> 
        </select>
        {errors.select.required ? <p className='error'>select is required</p>:null}

        <input type='textarea' name='text area' placeholder='Enter your text area' className='inputbox' onChange={handleInput}></input>
        {errors.textarea.required ? <p className='error'>text area is required</p>:null}
        <input type='file' name='file' placeholder='Enter your upload' className='inputbox' onChange={handleInput}></input>
        {errors.file.required ? <p className='error'>file is required</p>:null}
       </div>


      <div className='right_container'>
      

      <div className='checkboxname'>
     


<label className='checkboxname'>
  <input 
    type='checkbox'  name='accept' className='checkbox'  value='accept'   
    onChange={handleInput} 
  />
  <h3>checkbox</h3>
  {errors.accept?.required && <p className='error'>Checkbox is required</p>} 
</label>


<label className='checkboxname'>
  <input 
    type='checkbox'  name='accepttow' className='checkbox'  value='accepttwo'  
    onChange={handleInput} 
  />
  <h3>checkbox</h3>
  {errors.accepttwo?.required && <p className='error'>Checkbox is required</p>} 
</label>


<label className='checkboxname'>
  <input 
    type='checkbox'  name='accept' className='checkbox'  value='accept'  id='accept' 
    onChange={handleInput} 
  />
  <h3>checkbox</h3>
  {errors.accept?.required && <p className='error'>Checkbox is required</p>} 
</label>

        

       

      </div>

        


       <div className="radio">
          <input type="radio" value="Male" name="radio"  id="" onChange={handleInput}/>male
          <input type="radio"value="female" name="radio" id=""  />female
        {errors.radio.required ? <p className='error'>radio is required</p>:null}

        
        </div>

    
       <input type='submit' value='Submit' className='submit' />
      </div>

      </form>
    </div>
  )
}

export default Form