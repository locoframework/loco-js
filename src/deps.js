let IdentityMap = null;
let Models = null;

const setIdentityMap = (IM) => {
  IdentityMap = IM;
  IdentityMap.clear();
};

const setModels = (Ms) => (Models = Ms);

export { IdentityMap, Models, setIdentityMap, setModels };
