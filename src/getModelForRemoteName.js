import { Models } from "./deps";

const getModels = () => {
  if (!Models || typeof Models !== "object") return [];

  const models = [];
  const regExp = /^[A-Z]/;
  for (const func of Object.keys(Models)) {
    if (!regExp.test(func) || func === "Base") continue;
    models.push(func);

    const container = Models[func];
    for (const innerFunc of Object.keys(container)) {
      if (regExp.test(innerFunc)) models.push(`${func}.${innerFunc}`);
    }
  }
  return models;
};

const getModelForRemoteName = (remoteName) => {
  for (const model of getModels()) {
    const parts = model.split(".");
    if (parts.length === 1) {
      const M = Models[parts[0]];
      if (M?.getRemoteName?.() === remoteName) return M;
    } else if (parts.length === 2) {
      const M = Models[parts[0]]?.[parts[1]];
      if (M?.getRemoteName?.() === remoteName) return M;
    }
  }
  return undefined;
};

export default getModelForRemoteName;