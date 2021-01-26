const URL = "https://softer034.cafe24.com/api";

export const imagePathFormat = (uri) => {
  return `${URL}${uri.substring(2)}`;
}