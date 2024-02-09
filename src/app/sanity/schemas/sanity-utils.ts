import { Categories } from "../../../../types/Categories";
import { Products } from "../../../../types/Products";
import { createClient, groq } from "next-sanity";

export async function getProducts(): Promise<Products[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "product"]{
            _id,
            _createdAt,
            nameE,
            nameA,
            "image": image[].asset->{
              _id,
              url
            },
            price,
            "categoryE": {
              "_id": categoryE._ref,
              "name": categoryE->name,
            },
            "categoryA": {
              "_id": categoryA._ref,
              "name": categoryA->name,
            },
            contentE,
            contentA
        }`
  );
}

export async function getProduct(id: string): Promise<Products> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-11-06",
  });
  return client.fetch(
    groq`*[_type == "product" && _id == $id]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image[]{
                    asset-&gt;{
                    _id,
                    url
                    }
                  },
        price,
        "category": {
          "_id": category._ref,
          "name": category->name,
          "slug": category->slug.current
        },
        content
    }`,
    { id }
  );
}
export async function getCategoriesE(): Promise<Categories[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "categoryE"]{
            _id,
            _createdAt,
            name,
        }`
  );
}
export async function getCategoriesA(): Promise<Categories[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "categoryA"]{
            _id,
            _createdAt,
            name,
        }`
  );
}
