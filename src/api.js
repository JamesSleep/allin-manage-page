import axios from "axios";

const api = axios.create({
  baseURL: "https://softer034.cafe24.com/api/"
});

export const userApi = {
  getUser: () => api.post("USER/GetAllUser/")
};

export const companyApi = {
  getCompany: (data) => api.post("Company/GetCompany/", data),
  getOneCompany: (data) => api.post("Company/GetOneCompany/", data),
};

export const storyApi = {
  getStory: (data) => api.post("Story/GetStory", data),
  deleteStory: (data) => api.post("Story/DeleteStory/", data),
}