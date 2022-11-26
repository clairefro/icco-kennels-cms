export default {
  name: "puppy",
  type: "document",
  title: "Puppy",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (r) => r.required().min(1).max(80),
    },
    {
      name: "sex",
      type: "string",
      title: "Sex",
      options: {
        list: [
          { title: "Male", value: "m" },
          { title: "Female", value: "f" },
        ],
      },
      validation: (r) => r.required(),
    },
    {
      name: "bio",
      type: "array",
      title: "Bio",
      of: [{ type: "block" }],
      validation: (r) => r.required().min(1).max(300),
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (r) => r.required(),
    },
    {
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
