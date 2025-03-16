import React from "react";
import "./form.css";
// import {userValidation} from './Validation'
// import { validationSchema } from './Validation'
import { useState } from "react";

const Form = () => {
  // const creatuser = async (event) => {
  //   event.preventDefault()
  //   console.log(creatuser)
  //  let formData = {
  //   name: event.target[0].value,
  //   password: event.target[1].value,
  //   email: event.target[2].value,
  //   phone: event.target[3].value,
  //   url: event.target[4].value,
  //   date: event.target[5].value,
  //   time: event.target[6].value,
  //   textArea: event.target[7].value,
  //   file: event.target[8].value,
  //   checkbox: event.target[9].value,
  //   radio: event.target[10].value,

  //  }
  //  console.log(formData)
  //  const isValid = await  validationSchema.isValid(formData)
  //   console.log(isValid)
  // }

  const initialErrors = {
    name: { required: false },

    email: { required: false },

    password: { required: false },

    select: { required: false },

    checkbox: { required: false },

    radio: { required: false },
  };

  const [errors, setErrors] = useState(initialErrors);

  const [input, setInput] = useState({
    name: "",

    email: "",

    password: "",

    select: "",

    checkbox: "",

    radio: "",
  });

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = initialErrors;

    if (input.name === "") {
      errors.name.required = true;
    }

    if (input.email === "") {
      errors.email.required = true;
    }

    if (input.password === "") {
      errors.password.required = true;
    }

    if (input.checkbox === "") {
      errors.checkbox.required = true;
    }

    if (input.radio === "") {
      errors.radio.required = true;
    }

    if (input.select === "") {
      errors.select.required = true;
    }

    setErrors(errors);
  };

  return (
    <div className="container">
      {/* <form className='form' onSubmit={creatuser}>

             <div>
                <input type='text' placeholder='Enter your name' className='inputbox'  />
                  <p>enter your name</p>
                  <input type='password' placeholder='Enter your password'
                  name='password' className='inputbox' />  
                  <p>emil is required</p>   
                  <input type='email' placeholder='Enter your email' className='inputbox' />
                  <input type='number' placeholder='Enter your phone number' className='inputbox' />
                  <input type='url' placeholder='Enter your url' className='inputbox' />
                  <input type='date' placeholder='Enter your date' className='inputbox' />
                  <input type='text area' placeholder='Enter your text area' className='inputbox' />
                  <input type='file' placeholder='Enter your upload' className='inputbox' />
              </div>
              <div>
                  
                  <select> 
                    <option value='select'>select</option>
                    <option value='option1'>option1</option>    
                    <option value='option2'>option2</option>
                    <option value='option3'>option3</option>  
                  </select>
                   <label className='checkboxname'>
                   <input type='checkbox' placeholder='Enter your checkbox' className='checkbox' value= 'CHECKED' />
                   <h3>checkbox</h3>

                   <input type='checkbox' placeholder='Enter your checkbox' className='checkbox' value= 'CHECKED'  />
                   <h3>checkbox</h3>

                   <input type='checkbox' placeholder='Enter your checkbox' className='checkbox' value= 'CHECKED' />
                   <h3>checkbox</h3>


                   </label>

                    <label className='checkboxname'>
                    <input type='radio' placeholder='Enter your radio' className='radio' value= 'male' />
                    <h3>radio</h3>
                    <input type='radio' placeholder='Enter your radio' className='radio' value= 'femaLE' />
                    <h3>radio</h3>
                    </label>


                    <input type='submit' value='Submit' className='submit' />
              </div>
       
        </form> */}

      <form onSubmit={handleSubmit} action="">
        <input type="text" name="name" onChange={handleInput} id="" />

        {errors.name.required ? <p>name is required</p> : null}

        <input type="email" name="email" onChange={handleInput} id="" />

        {errors.email.required ? <p>email is required</p> : null}

        <input type="password" name="password" onChange={handleInput} id="" />

        {errors.password.required ? <p>Password is required</p> : null}

        <select name="select" onChange={handleInput} id="">
          
          <option value="Hindi">Hindi</option>

          <option value="English">English</option>

          <option value="Tamil">Tamil</option>
        </select>

        {errors.select.required ? <p>Please select a country</p> : null}

        <input
          type="checkbox"
          name="checkbox"
          id=""
          onChange={handleInput}
          value="checked"
        />

        {errors.checkbox.required ? <p>please agree </p> : null}

        <div className="radio">
          <input
            type="radio"
            onChange={handleInput}
            value="Male"
            name="radio"
            id=""
          />
          male
          <input
            type="radio"
            onChange={handleInput}
            value="female"
            name="radio"
            id=""
          />
          female
          {errors.radio.required ? <p>please select a gender</p> : null}
        </div>

        <input className="submit" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
