import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import {
  QueryClient,
  QueryClientProvider,
  queryOptions,
} from "@tanstack/react-query";

import { routeTree } from "./routeTree.gen";
import type { MealsPayload } from "./types";
import { fetchMeals } from "./api";
import { MealsProvider } from "./meals-context";


const router = createRouter({ routeTree });


const queryClient = new QueryClient();

export const mealsQuery = queryOptions<MealsPayload>({
  queryKey: ["meals"],
  queryFn: fetchMeals,
});


declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const mealsData: MealsPayload = await fetchMeals();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
              <MealsProvider value={mealsData}>

        <RouterProvider router={router} />
      </MealsProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
