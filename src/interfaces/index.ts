export type ProductProps = {
  id?: string;
  title: string;
  description?: string;
  price?: string;
  linkHref: string;
  imageSrc: string;
};

export type CreateBannerInterface = {
  _id?: string;
  id: string;
  title: string;
  description: string;
  imagePath: string;
};
