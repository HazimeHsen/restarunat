const products = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "nameE",
      title: "Name (English)",
      type: "string",
    },
    {
      name: "nameA",
      title: "Name (Arabic)",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "categoryE",
      type: "reference",
      title: "Category (English)",
      to: [{ type: "categoryE" }],
    },
    {
      name: "categoryA",
      type: "reference",
      title: "Category (Arabic)",
      to: [{ type: "categoryA" }],
    },
    {
      name: "contentE",
      title: "Content (English)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "contentA",
      title: "Content (Arabic)",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default products;
