// src/components/ThankYou.js
import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h2>Thank You!</h2>
      <p>Your response has been recorded.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default ThankYou;
