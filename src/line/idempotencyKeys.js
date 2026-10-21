const MAX = 1000;
const keys = [];

export default (key) => {
  if (key == null) return false;
  if (keys.includes(key)) return true;
  keys.unshift(key);
  if (keys.length > MAX) keys.pop();
  return false;
};
