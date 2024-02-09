import { PortableTextBlock } from "sanity";
import { Categories } from "./Categories";
import { Images } from "./Images";

export type Products = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  price: number;
  image: Images[];
  content: PortableTextBlock[];
  category: Categories;
};
