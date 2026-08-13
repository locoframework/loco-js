import { jest } from "@jest/globals";

const mockXHR = () => {
  const mock = {
    open: jest.fn(),
    send: jest.fn(),
    responseText: "{}",
    setRequestHeader: jest.fn(),
  };
  window.XMLHttpRequest = jest.fn(() => mock);
  return mock;
};

// installed for every suite via setupFilesAfterEnv so no test hits the network
mockXHR();

export default mockXHR;
