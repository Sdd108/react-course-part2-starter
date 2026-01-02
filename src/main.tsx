import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

// const queryClient = new QueryClient({
//   // Global options for all queries
//   // In most scenarios, these defaults make sense and no need to override them. staleTime might be one you want to adjust based on your app needs.
//   defaultOptions: {
//     queries: {
//       retry: 3, // Retry failed requests once before displaying an error
//       cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
//       staleTime: 1000 * 10, // Data is considered fresh for 10 seconds.
//       refetchOnWindowFocus: false, // Disable refetch on window focus
//       refetchOnReconnect: true, // Enable refetch on reconnect
//       refetchOnMount: true, // Enable refetch on mount
//     },
//   },
// });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
      {/* React Query Devtools for debugging */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
