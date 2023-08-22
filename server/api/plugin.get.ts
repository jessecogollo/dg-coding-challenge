import plugins from "~/server/mockData";

export default defineEventHandler(async (event) => {
  return plugins;
});
