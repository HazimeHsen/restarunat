import { PortableTextBlock } from "sanity";
import { Images } from "./Images";
import { Categories } from "./Categories";

export type Products = {
  _id: string;
  _createdAt: Date;
  nameE: string;
  nameA: string;
  slug: string;
  price: number;
  image: Images[];
  contentE: PortableTextBlock[];
  contentA: PortableTextBlock[];
  categoryE: Categories;
  categoryA: Categories;
};
