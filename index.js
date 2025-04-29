const invertCase = (text) => {
    let i = 0;
    let result = '';
  
    while (i < text.length) {
      let char = text[i];
  
      if (char === char.toUpperCase()) {
        char = char.toLowerCase();
      } else {
        char = char.toUpperCase();
      }
  
      result = result + char;
      i = i + 1;
    }
  
    return result;
  };
  
  export default invertCase;
  
  const text = 'Hello, World!';
  const result = invertCase(text);
  
  console.log(result);
  