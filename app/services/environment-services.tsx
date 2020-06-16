import {AppToaster} from "../toast/toaster";

export const addEnvironment = (env: any) => {
  let environments = JSON.parse(localStorage.getItem("environments"));
  if (environments == null) {
    environments = [];
  }

  environments.push(env);
  localStorage.setItem("environments", JSON.stringify(environments));

  AppToaster.show({message: "Environment added.", icon: "confirm", intent: "success"});
  return environments;
}

export const changeCurrentEnvironment = (currentEnvironment: string) => {
  localStorage.setItem("currentEnvironment", currentEnvironment);
}

export const getCurrentEnvironment = () => {
  return localStorage.getItem("currentEnvironment");
}

export const getEnvironments = (): any[] => {
  let list = JSON.parse(localStorage.getItem("environments"));
  return list;
}

export const removeEnvironment = (environment: any) => {
  let environments = JSON.parse(localStorage.getItem("environments"));
  var deleteIndex = environments.findIndex(x => x.name == environment);
  environments.splice(deleteIndex, 1);
  localStorage.setItem("environments", JSON.stringify(environments));
  AppToaster.show({message: "Environment deleted.", icon: "confirm", intent: "success"});
}


