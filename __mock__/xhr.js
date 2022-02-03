const createMockXHR = (responseJSON) => {
  return {
    open: jest.fn(),
    send: jest.fn(),
    responseText: JSON.stringify(
      responseJSON || {}
    ),
    setRequestHeader: jest.fn()
  };
}

export default () => {
  const mock = createMockXHR();
  window.XMLHttpRequest = jest.fn(() => mock);
  return mock;
};
