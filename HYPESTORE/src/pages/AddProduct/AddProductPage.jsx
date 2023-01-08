import React from 'react';
import './style.css';

function AddProductPage() { 
    return (
      <div class="wrapper">
        <div class="title">
            Add Product
      </div>
    <div class="form">
       <div class="inputfield">
          <label>Title</label>
          <input type="text" class="input"></input>
       </div>  
        <div class="inputfield">
          <label>Price</label>
          <input type="text" class="input"></input>
       </div>   
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="kids">Kids</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
       </div> 
       <div class="inputfield">
          <label>Size</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">42</option>
              <option value="female">43</option>
              <option value="kids">44</option>
              <option value="unisex">45</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"></input>
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"></input>
       </div> 
      <div class="inputfield">
          <label>Decsription</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Create Item" class="btn"></input>
      </div>
    </div>
  </div>	
    );
};

export default AddProductPage;