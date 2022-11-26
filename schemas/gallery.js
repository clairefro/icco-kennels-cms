export default {
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
