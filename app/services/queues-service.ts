import axios from "axios";
export const getHosts = async () => {
  let currentEnvironment = JSON.parse(localStorage.getItem("currentEnvironment"));
  const result = await axios(
    {
      method: 'GET',
      auth: {username: currentEnvironment.userName, password: currentEnvironment.password},
      url: currentEnvironment.url + '/api/vhosts',
    }
  );
  return result;
}

export const getQueues = async () => {
  debugger;
  let currentEnvironment = JSON.parse(localStorage.getItem("currentEnvironment"));
  const result = await axios(
    {
      method: 'GET',
      auth: {username: currentEnvironment.userName, password: currentEnvironment.password},
      url: currentEnvironment.url + '/api/queues?page=1&page_size=100&name=&use_regex=false&pagination=true',
    }
  );
  return result;
}

export const changeCurrentVhosts = (currentVhost: string) => {
  localStorage.setItem("currentVhost", currentVhost);
}

export const getCurrentVhost = () => {
  let currentVhost = localStorage.getItem("currentVhost");
  return currentVhost;
}
