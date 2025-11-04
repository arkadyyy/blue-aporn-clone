import { createFileRoute, useParams, useSearch } from "@tanstack/react-router";
import {
  TopSection,
  Ingredients,
  Instructions,
  StickyBottom,
} from "@/components";
import { DraftOrderProvider } from "@/components/recipes/draftOrderContext";
type SearchParams = {
  cycle_date?: string;
  product_id?: string;
  product_servings?: string;
  item_id?: string;
};

export const Route = createFileRoute("/recipes/$slug")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    cycle_date:
      typeof search?.cycle_date === "string" ? search.cycle_date : undefined,
    product_id:
      typeof search?.product_id === "string" ? search.product_id : undefined,
    product_servings:
      typeof search?.product_servings === "string"
        ? search.product_servings
        : undefined,
    item_id: typeof search?.item_id === "string" ? search.item_id : undefined,
  }),
  // loader: async ({ params, search }) => {
  // const { slug } = params;
  // you now have params.slug = "everything-bagel-salmon"
  // and search = { cycle_date, product_id, product_servings, item_id }
  // Use them to fetch data or whatever you need:

  // return fetchRecipeData(slug, search);
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = useParams({ from: Route.id });
  const search = useSearch({ from: Route.id });

  return (
    <div style={{ backgroundColor: "white" }}>
      <DraftOrderProvider>
        <TopSection />
        <Ingredients />
        <Instructions />
        <StickyBottom />
      </DraftOrderProvider>
    </div>
  );
}
