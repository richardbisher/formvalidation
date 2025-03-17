import React, { useState } from 'react';
import './form.css';
import { Switch } from 'antd';




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
    toggle: { required: false }, 
  };
  console.log(initialErrors);

  const [errors, setErrors] = useState(initialErrors);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    url: '',
    date: '',
    textarea: '',
    file: '',
    select: '',
    checkbox: false,
    toggle: false, 
    accept: false,
    accepttwo: false,
    radio: '',
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setInput({
      ...input,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSwitchChange = (checked) => {
    setInput({ ...input, toggle: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = { ...initialErrors };

    
    if (input.name === '') errors.name.required = true;
    if (input.email === '') errors.email.required = true;
    if (input.password === '') errors.password.required = true;
    if (input.phonenumber === '') errors.phonenumber.required = true;
    if (input.url === '') errors.url.required = true;
    if (input.date === '') errors.date.required = true;
    if (input.select === '') errors.select.required = true;
    if (input.textarea === '') errors.textarea.required = true;
    if (input.file === '') errors.file.required = true;
    if (input.accept === false) errors.accept.required = true;
    if (input.accepttwo === false) errors.accepttwo.required = true;
    if (input.checkbox === false) errors.checkbox.required = true;
    if (input.radio === '') errors.radio.required = true;

    
    if (!input.toggle) {
      errors.toggle.required = true;
    }

    setErrors(errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInput}
            className="inputbox"/>
          {errors.name.required ? <p className="error">Name is required</p> : null}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="inputbox"
            onChange={handleInput}/>
          {errors.password.required ? <p className="error">Password is required</p> : null}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="inputbox"
            onChange={handleInput} />
          {errors.email.required ? <p className="error">Email is required</p> : null}

          <input
            type="number"
            name="phonenumber"
            placeholder="Enter your phone number"
            className="inputbox"
            onChange={handleInput} />
          {errors.phonenumber.required ? <p className="error">Phone number is required</p> : null}
          <input
            type="url"
            name="url"
            placeholder="Enter your URL"
            className="inputbox"
            onChange={handleInput}/>
          {errors.url.required ? <p className="error">URL is required</p> : null}

          <input
            type="date"
            name="date"
            className="inputbox"
            onChange={handleInput} />
          {errors.date.required ? <p className="error">Date is required</p> : null}

          <select className="inputbox" name="select" onChange={handleInput}>
            <option value="select">Select your language</option>
            <option value="option1">Hindi</option>
            <option value="option2">English</option>
            <option value="option3">Tamil</option>
          </select>
          {errors.select.required ? <p className="error">Select is required</p> : null}

          <textarea
            name="textarea"
            placeholder="Enter your text area"
            className="inputbox"
            onChange={handleInput} ></textarea>
          {errors.textarea.required ? <p className="error">Text area is required</p> : null}

          <input
            type="file"
            name="file"
            className="inputbox"
            onChange={handleInput}/>
          {errors.file.required ? <p className="error">Select your file</p> : null}
        </div>

        <div className="right_container">
      
          <label>
            <input
              type="checkbox"
              name="accept"
              className="checkbox"
              checked={input.accept}
              onChange={handleInput}/>
            Accept
          </label><br></br>
          {errors.accept.required && <p className="error">Accept is required</p>}

          <label>
            <input
              type="checkbox"
              name="accepttwo"
              className="checkbox"
              checked={input.accepttwo}
              onChange={handleInput}/> Accept Two
          </label>
          {errors.accepttwo.required && <p className="error">Accept Two is required</p>}

          
          <div className="radio">
            <input
              type="radio"
              value="Male"
              name="radio"
              onChange={handleInput} /> Male
            <input
              type="radio"
              value="Female"
              name="radio"
              onChange={handleInput}
            /> Female
            {errors.radio.required ? <p className="error">Radio is required</p> : null}
          </div>

        <div>
          
        </div>
        
          <div className="switch">
            <Switch checked={input.toggle} onChange={handleSwitchChange} />
            {errors.toggle.required && <p className="error">Toggle is required</p>}
          </div>

          <input type="submit" value="Submit" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
