import createFetchClient from "openapi-fetch";

function createClient() {
  return createFetchClient<{}>({
    baseUrl: "http://example.com",
  });
}
