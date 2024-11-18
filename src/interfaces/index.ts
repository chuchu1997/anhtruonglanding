export type ProductProps = {
  id?: string;
  title: string;
  description?: string;
  price?: string;
  linkHref: string;
  imageSrc: string;
};

export type BannerItemInterface = {
  _id?: string;

  title: string;
  description: string;
  imagePath: string;
};
