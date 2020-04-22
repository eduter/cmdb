export interface Movie {
  title: string
  year: number;
  runtime: number;
  plot: string;
  images: {
    thumbnail: string;
    poster: string
  };
}
