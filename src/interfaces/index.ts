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

export interface Section01Interface extends BannerItemInterface {
  subTitle: string;
  features: string[];
}
// export type Section01Interface = &BannerItemInterface {
//   _id?: string;
//   title: string;
//   subTitle: string;
//   description: string;
//   features: string[];
//   imagePath: string;
// };
