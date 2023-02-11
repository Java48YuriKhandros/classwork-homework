import React from 'react'
import { api_key, base_url } from '../utils/constants';

const Form = () => {

  const handleSubmit = e => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    fetch(`${base_url}?q=${city}&appid=${api_key}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='city' placeholder='City' />
      <button type='submit'>Get weather</button>
    </form>
  )
}

export default Form