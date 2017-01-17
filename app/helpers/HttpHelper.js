export const buildRequestParams = (params) => {
  const form_data = new FormData();
  form_data.append('data', JSON.stringify(params));
  return form_data;
}
