const invertCase = (text) => {
  let i = 0;
  let result = '';

  while (i < text.length) {

    if (text[i] === text[i].toUpperCase()) {
      result = result + text[i].toLowerCase();
    } else {
      result = result + text[i].toUpperCase();
    }

    i = i + 1;
  }
  return result;
};
  
export default invertCase;

// Проверка
  
const text = 'Hello, World!';
const result = invertCase(text);

console.log(result);
  