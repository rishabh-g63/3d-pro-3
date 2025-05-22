
import React, { useState } from 'react';

const Text1 = () => {
  return (
    <div className="container">
      <h1>Welcome to RS Travels</h1>
      <h1>Your Journey, Our Expertise</h1>
      <p>RS Travels is your one-stop destination for all your travel needs. Whether you're looking for a relaxing getaway, an adventure-filled escapade, or a business trip, we've got you covered. Our team of travel experts is dedicated to providing you with personalized service, tailored to your unique preferences and requirements.</p>
    </div>
  );
};

const Text2 = () => {
  return (
    <div className="container">
     <h2>- Easy booking and payment options</h2>
     <h2>- Customizable travel packages</h2>
     <h2>- Expert travel advice and recommendations</h2>
     <h2>- 24/7 customer support</h2>
    </div>
  );
};

const Text = () => {
  const [showText1, setShowText1] = useState(true);

  const handleClick = () => {
    setShowText1(!showText1);
  };

  return (
    <div>
      {showText1 ? <Text1 /> : <Text2 />}
      <button className="next" onClick={handleClick}>NEXT</button>
    </div>
  );
};

export default Text