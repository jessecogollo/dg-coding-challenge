import { SuccessResponse } from "~/types/plugin";

export default defineEventHandler(async (event): Promise<SuccessResponse> => {
  const body = await readBody(event);
  console.log("body", body);
  return { data: { status: "Success" }, errors: null };
});
