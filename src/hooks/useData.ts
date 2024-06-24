// DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED DEPRECATED

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { AxiosRequestConfig, CanceledError } from "axios";

// // interface for response from call to RAWG
// export interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   // State vars for games and error state
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // Getting games from RAWG via axios
//   useEffect(
//     () => {
//       // controller to check for cancellation
//       const controller = new AbortController();
//       setIsLoading(true);
//       apiClient
//         .get<FetchResponse<T>>(endpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then((res) => {
//           setData(res.data.results);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setIsLoading(false);
//         });

//       // return callback func
//       return () => controller.abort();
//     },
//     deps ? [...deps] : []
//   );

//   return { data, error, isLoading };
// };

// // export
// export default useData;
