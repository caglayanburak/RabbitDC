import {AppToaster} from "../toast/toaster";

export const addEnvironment = (env: any) => {
  let items = localStorage.getItem("environments");
  let environments = JSON.parse(items);
  if (environments == null) {
    environments = [];
  }

  environments.push(env);
  localStorage.setItem("environments", JSON.stringify(environments));

  AppToaster.show({message: "Environment added.", icon: "confirm", intent: "success"});
  return environments;
}

export const changeCurrentEnvironment = (currentEnvironment: string) => {
  let environments = getEnvironments;
  var cEnvironment = environments().find(x => x.name == currentEnvironment);

  localStorage.setItem("currentEnvironment", JSON.stringify(cEnvironment));
}

export const getCurrentEnvironment = () => {
  let currentEnvironment;
  try {
    currentEnvironment =  JSON.parse(localStorage.getItem("currentEnvironment"));
  }
  catch (e) {
    currentEnvironment = {};
  }
  return currentEnvironment;
}

export const getEnvironments = (): any[] => {
  let list ;
  try {
    list =  JSON.parse(localStorage.getItem("environments"));
  }
  catch (e) {
    list = [];
  }
  return list;
}

export const removeEnvironment = (environment: any) => {
  let environments = JSON.parse(localStorage.getItem("environments"));
  var deleteIndex = environments.findIndex(x => x.name == environment);
  environments.splice(deleteIndex, 1);
  localStorage.setItem("environments", JSON.stringify(environments));
  AppToaster.show({message: "Environment deleted.", icon: "confirm", intent: "success"});
}




