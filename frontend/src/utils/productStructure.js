export const types = [
  {
    idName: "DVD",
    name: "Dvd",
    attribute_type_name: "size",
    attribute_unit_name: "MB",
    specificAttributes: [
      {
        idName: "size",
        name: "size",
        unit: "MB",
        label: "dvd size",
      },
    ],
    description: "u should enter DVD size in MG",
  },
  {
    idName: "Furniture",
    name: "Furniture",
    attribute_type_name: "dimensions",
    attribute_unit_name: "",
    specificAttributes: [
      {
        idName: "height",
        name: "height",
        unit: "CM",
        label: "furniture height",
      },
      {
        idName: "width",
        name: "width",
        unit: "CM",
        label: "furniture width",
      },
      {
        idName: "length",
        name: "length",
        unit: "CM",
        label: "furniture length",
      },
    ],
    description: "u should enter furniture dimensions in HxWxL",
  },
  {
    idName: "Book",
    name: "Book",
    attribute_type_name: "weight",
    attribute_unit_name: "KG",
    specificAttributes: [
      {
        idName: "weight",
        name: "weight",
        unit: "KG",
        label: "book weight",
      },
    ],
    description: "u should enter book weight in KG",
  },
];

types.forEach((type) => {
  type.specificAttributes.forEach((attribute) => {
    attribute.label = `${type.name} ${attribute.name} (${attribute.unit})`;
  });
});

export const productStructure = {
  sku: {
    label: "product sku",
    name: "sku",
    idName: "sku",
  },
  name: {
    label: "product name",
    name: "name",
    idName: "name",
  },
  price: {
    label: "product price",
    name: "price",
    idName: "price",
  },
  type: {
    label: "product type",
    name: "type",
    idName: "producType",
    types: types,
  },
};

export const productType = types.reduce((acc, type) => {
  acc[type.name] = type.name;
  return acc;
}, {});

export const attributeTypeName = types.reduce((acc, type) => {
  acc[type.name] = type.attribute_type_name;
  return acc;
}, {});
