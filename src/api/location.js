import { userLocationUrl, userLocationApiKey } from "../helpers";

export const locationConfig = {
  url: userLocationUrl,
  method: "get",
  params: {
    "api-key": userLocationApiKey,
  },
  headers: { Accept: "application/json" },
};
