import axios from 'axios';
import { QueueDto } from '../response-types/queue-dto';

export const getHosts = async () => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return [];
  }

  const parsedEnvironment = JSON.parse(currentEnvironment);
  const result = await axios(
    {
      method: 'GET',
      auth: { username: parsedEnvironment.userName, password: parsedEnvironment.password },
      url: parsedEnvironment.url + '/api/vhosts'
    }
  );
  return result;
};

export const getQueues = async (vhost?: string): Promise<QueueDto[]> => {
  const currentEnvironment = localStorage.getItem('currentEnvironment');
  if (!currentEnvironment) {
    return [] as QueueDto[];
  }

  const parsedEnvironment = JSON.parse(currentEnvironment);
  const result = await axios(
    {
      method: 'GET',
      auth: { username: parsedEnvironment.userName, password: parsedEnvironment.password },
      url: parsedEnvironment.url + `/api/queues${!!vhost ? '/' + vhost : ''}?page=1&page_size=100&name=&use_regex=false&pagination=true`
    }
  );
  return result.data.items as QueueDto[];
};

export const changeCurrentVhosts = (currentVhost: string) => {
  localStorage.setItem('currentVhost', currentVhost);
};

export const getCurrentVhost = () => {
  let currentVhost = localStorage.getItem('currentVhost');
  return currentVhost;
};
