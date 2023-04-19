export const GenreList = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Ecchi',
  'Fantasy',
  'Game',
  'Harem',
  'Historical',
  'Horror',
  'Isekai',
  'Magic',
  'Mecha',
  'Military',
  'Music',
  'Mystery',
  'Parody',
  'Psychological',
  'Romance',
  'School',
  'Sci-Fi',
  'Seinen',
  'Shoujo',
  'Shounen',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Yaoi',
  'Yuri',
] as const;

export type Genre = (typeof GenreList)[number];

export interface GenreResponse {
  genre: Genre;
  count: number;
}
