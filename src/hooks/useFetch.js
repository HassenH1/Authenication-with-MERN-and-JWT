import { url } from "../utils/enum";

/**
 * Custom reusable fetch hook
 *
 * @function useFetch
 * @example const { fetchRequest } = useFetch();
 * @returns {function}
 */
function useFetch() {
  /**
   *
   *
   * @function fetchRequest
   * @async
   * @param {ROUTES} path
   * @param {METHOD} method
   * @param {Object} body
   * @returns {Promise<Object>}
   */
  const fetchRequest = async (path, method, body) => {
    try {
      const resp = await fetch(`${url}/${path}`, {
        method: method,
        credentials: "include", // Don't forget to specify this if you need cookies
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        ...(body && { body: JSON.stringify(body) }),
      });
      const data = await resp.json();
      return data;
    } catch (e) {
      throw new Error(`Error using useFetch Hook ${e}`);
    }
  };

  return { fetchRequest };
}

export default useFetch;
