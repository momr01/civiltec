import { StaticImageData } from "next/image";

export interface IBlogItem {
  id: string;
  order: number;
  title: string;
  description: string;
  images: StaticImageData[];
  video: string;
  createdAt: string;
}
