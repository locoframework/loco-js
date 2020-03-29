const keys = [];

export default key => {
  if (keys.includes(key)) return true;
  keys.unshift(key);
  if (keys.length > 100) keys.pop();
  return false;
};
