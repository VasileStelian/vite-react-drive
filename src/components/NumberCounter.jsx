import React, { useState, useEffect } from 'react';

const NumberCounter = ({ targetNumber, speed }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCount((prevCount) => Math.min(prevCount + 1, targetNumber));
    };

    if (count < targetNumber) {
      const interval = setInterval(() => {
        updateCount();
      }, speed);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [count, targetNumber, speed]);

  return <div className='text-neonPink font-semibold text-[50px] font-poppins'>{count}+</div>;
};

export default NumberCounter;