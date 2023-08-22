import { DataPluginUpdate } from "~/types/plugin";

export const useUpdatePlugin = (data: DataPluginUpdate) =>
  useFetch("/api/plugin", {
    method: "POST",
    body: JSON.stringify(data),
  });
