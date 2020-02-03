export default (responseJSON) => {
  return {
      open: jest.fn(),
      send: jest.fn(),
      responseText: JSON.stringify(
          responseJSON || {}
      ),
      setRequestHeader: jest.fn()
  };
}
