export const useUpdatePlugin = (data: any) =>
  useFetch("/api/plugin", {
    method: "POST",
    body: JSON.stringify(data),
  });
