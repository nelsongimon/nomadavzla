import { api } from "@/lib/api";

export async function getStyleWithProducts(style: string, query: Record<string, any>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/styles/${style}?filter=${filter}` : `/styles/${style}`;
  try {
    const res = await api.get(url);
    return res.data.style;
  } catch (error) {
    console.log("STYLE WITH PRODUCTS ERROR", error);
    return [];
  }
}