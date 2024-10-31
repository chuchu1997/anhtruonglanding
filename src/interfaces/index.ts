type imageProps = {
  id: string;
  path: string;
};
export type ProductProps = {
  _id: string;
  id?: string;
  title: string;
  description?: string;
  price?: string;

  hashtag: Array<string>;
  categoryID: string;
  imagesObject: imageProps[];
  dropshipFrom?: string;
};
