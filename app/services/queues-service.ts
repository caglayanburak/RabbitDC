import axios from 'axios';
import {QueueDto} from '../response-types/queue-dto';

export const getHosts = async () => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return [];
  }

  const parsedEnvironment = JSON.parse(currentEnvironment);
  const result = await axios(
    {
      method: 'GET',
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + '/api/vhosts'
    }
  );
  return result;
};

export const getQueues = async (): Promise<QueueDto[]> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return [] as QueueDto[];
  }
  let vhost = getCurrentVhost();
  const parsedEnvironment = JSON.parse(currentEnvironment);
  const result = await axios(
    {
      method: 'GET',
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + `/api/queues${!!vhost ? '/' + vhost : ''}?page=1&page_size=100&use_regex=false&pagination=true`
    }
  );
  return result.data.items as QueueDto[];
};

export const getQueueDetails = async (queueName: string): Promise<any[]> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return [] as QueueDto[];
  }
  let vhost = getCurrentVhost();
  const parsedEnvironment = JSON.parse(currentEnvironment);
  const result = await axios(
    {
      method: 'POST',
      data:{
        "vhost":"ghost",
        "name":queueName,
        "truncate":"50000",
        "requeue":"true",
        "encoding":"auto",
        "count":"1000"},
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + `/api/queues${!!vhost ? '/' + vhost : ''}/${queueName}/get`
    }
);
  return result.data.items as any[];
};

export const purgeQueue = async (queueName: string): Promise<boolean> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return false;
  }

  let vhost = getCurrentVhost();
  const parsedEnvironment = JSON.parse(currentEnvironment);
  await axios(
    {
      method: 'DELETE',
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + `/api/queues${!!vhost ? '/' + vhost : ''}/${queueName}/contents`
    }
  );
  return true;
};

export const moveQueue = async (fromQueueName: string, toQueueName: string): Promise<boolean> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return false;
  }

  let vhost = getCurrentVhost();
  var payload = {
    component: "shovel",
    vhost: vhost,
    name: "Move from " + fromQueueName,
    value: {
      "src-uri": "amqp:///" + vhost,
      "src-queue": fromQueueName,
      "dest-queue": toQueueName,
      "dest-uri": "amqp:///" + vhost,
      "prefetch-count": 1000,
      "add-forward-headers": false,
      "ack-mode": "on-confirm",
      "delete-after": "queue-length"
    },
  };

  const parsedEnvironment = JSON.parse(currentEnvironment);
  await axios(
    {
      method: 'PUT',
      data: payload,
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + `/api/parameters/shovel/${vhost}/Move%20from%20${fromQueueName}`
    }
  );
  return true;
};

export const deleteQueue = async (queueName: string): Promise<boolean> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return false;
  }

  let vhost = getCurrentVhost();
  var payload = {"vhost": vhost, "name": queueName, "mode": "delete"};

  const parsedEnvironment = JSON.parse(currentEnvironment);
  await axios(
    {
      method: 'DELETE',
      data: payload,
      auth: {username: parsedEnvironment.userName, password: parsedEnvironment.password},
      url: parsedEnvironment.url + `/api/queues/${vhost}/${queueName}`
    }
  );
  return true;
};

export const changeCurrentVhosts = (currentVhost: string) => {
  localStorage.setItem('currentVhost', currentVhost);
};

export const getCurrentVhost = () => {
  let currentVhost = localStorage.getItem('currentVhost');
  return currentVhost;
};
