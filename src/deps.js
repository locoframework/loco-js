let IdentityMap = null;
let Models = null;

const setDeps = (connector) => {
  IdentityMap = connector.IdentityMap;
  Models = connector.Models;
  IdentityMap.clear();
};

export { IdentityMap, Models, setDeps };
