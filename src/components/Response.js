// src/components/Response.js
import React from 'react';

const Response = () => {
  const handleYes = () => {
    window.location.href = 'https://forms.gle/3WzCxZJgJwryHnpM7'; // Replace with your Google Form URL
  };

  return (
    <div style={styles.container}>
      <h2>
        Bas you need to fill your user ID in google form, fir mere pass Insta ID a jayega Click Yes to fill 
      </h2>
      <button onClick={handleYes} style={styles.button}>Yes</button>
      <button onClick={() => alert(" Share Kar De Yaar Plz!")} style={styles.button}>No</button>
      <img 
        src="https://i.pinimg.com/564x/e3/17/3b/e3173be00f7ecbd4d1e44f3bd55447e9.jpg" 
        alt="Connect on Instagram" 
        style={styles.image} 
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  image: {
    width: '100%', // Make the image responsive
    maxWidth: '200px', // Limits max width of the image
    height: 'auto', // Maintains aspect ratio
    margin: '20px 0', // Spacing around the image
  },
};

export default Response;
