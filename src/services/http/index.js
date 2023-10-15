import { EndPoint_Users } from "./endPoints";
import httpClient from "./httpClient";

export const getAllUsers = () => {
  return httpClient.get({
    url: EndPoint_Users,
  });
};

export const getUser = (id) => {
  return httpClient.get({
    url: EndPoint_Users,
    params: {
      id: id,
    },
  });
};
