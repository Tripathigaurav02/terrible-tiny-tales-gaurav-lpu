import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Button.css';

const Button = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState('');

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let resp = await axios.get('https://www.terriblytinytales.com/test.txt');
      let req = await resp.data;
      setResult(req);
      navigate('/chart', { state: { data: req } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="button-container">
      <div className="glasmorphosis-box">
        <form onSubmit={fetchData}>
          <div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Button;
