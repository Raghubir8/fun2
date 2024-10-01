// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hey !</h1>
      <p style={styles.description}>
        Hey ! I’ve noticed you around daily, and I can sense that we both might be interested in getting to know each other better. I think it would be great to connect! If you’re comfortable sharing your Instagram ID, we could chat there and have a chance to learn more about each other. What do you think ? If you want to share your insta I'd than just you need to click on proceed button 
      </p>
      <img 
        src="https://i.pinimg.com/564x/78/f6/bd/78f6bdb3a1f6e7ae6df23a1300242ad9.jpg" 
        alt="Connect on Instagram" 
        style={styles.image} 
      />
      <Link to="/response" style={styles.link}>Proceed</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    color: 'green',
    maxWidth: '600px', // Limits max width for larger screens
    margin: '0 auto', // Centers the container
  },
  title: {
    fontSize: '2rem', // Responsive title font size
    marginBottom: '20px', // Add space below the title
  },
  description: {
    fontSize: '1rem', // Responsive description font size
    margin: '20px 0', // Increased spacing around the paragraph
  },
  link: {
    margin: '40px 0 20px 0', // Space above and below the link
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem', // Responsive link font size
  },
  image: {
    width: '100%', // Make the image responsive
    maxWidth: '200px', // Limits max width of the image
    height: 'auto', // Maintains aspect ratio
    margin: '20px 0', // Spacing around the image
  },
};

export default Home;
