import React, { useState } from 'react';

const DateConverter = () => {
  const [inputDate, setInputDate] = useState('');
  const [convertedDate, setConvertedDate] = useState('');

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleConvertDate = (e) => {
    e.preventDefault();
    setConvertedDate(formatDate(inputDate));
  };

  return (
    <div>
      <h3>Date Converter</h3>
      <form onSubmit={handleConvertDate}>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {convertedDate && <p>Converted Date: {convertedDate}</p>}
    </div>
  );
};

export default DateConverter;
