import React from 'react';

export default function FriendForm(props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    
    // Update form values for all input fields
    update(name, value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    
    // Validate email before submitting the form
    if (!validateEmail(values.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Proceed with form submission
    submit();
  };

  const isEmailValid = email => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmail = email => {
    return isEmailValid(email);
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      {/* Your form inputs */}
      <label>Username
        <input 
          type='text'
          name='username'
          placeholder='Type a username...'
          value={values.username}
          onChange={onChange}
          maxLength='30'
        />
      </label>

      <label>Email
        <input 
          type='text'
          name='email'
          placeholder='Type an email...'
          value={values.email}
          onChange={onChange}
        />
      </label>

      <label>Role
        <select value={values.role} name='role' onChange={onChange}>
          <option value=''>*Select a role*</option>
          <option value='student'>Student</option>
          <option value='instructor'>Instructor</option>
          <option value='alumni'>Alumni</option>
        </select>
      </label>

      <div className='submit'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
