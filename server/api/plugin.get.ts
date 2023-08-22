import { ExportedData } from "~/types/plugin";
import plugins from "~/server/mockData";

export default defineEventHandler(async (event): Promise<ExportedData> => {
  return plugins;
});
