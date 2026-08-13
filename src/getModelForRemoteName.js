import { Models } from "./deps.js";

const isModel = (name) => /^[A-Z]/.test(name);

const getModelForRemoteName = (remoteName) => {
  for (const [name, M] of Object.entries(Models ?? {})) {
    if (!isModel(name) || name === "Base") continue;
    if (M?.getRemoteName?.() === remoteName) return M;
    for (const [innerName, InnerM] of Object.entries(M)) {
      if (isModel(innerName) && InnerM?.getRemoteName?.() === remoteName)
        return InnerM;
    }
  }
  return undefined;
};

export default getModelForRemoteName;
