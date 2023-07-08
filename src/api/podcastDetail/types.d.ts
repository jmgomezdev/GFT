import * as z from "zod";

export const ClosedCaptioningSchema = z.enum(["none"]);
export type ClosedCaptioning = z.infer<typeof ClosedCaptioningSchema>;

export const NameSchema = z.enum(["Switched on Pop"]);
export type Name = z.infer<typeof NameSchema>;

export const CountrySchema = z.enum(["USA"]);
export type Country = z.infer<typeof CountrySchema>;

export const EpisodeContentTypeSchema = z.enum(["audio"]);
export type EpisodeContentType = z.infer<typeof EpisodeContentTypeSchema>;

export const EpisodeFileExtensionSchema = z.enum(["mp3"]);
export type EpisodeFileExtension = z.infer<typeof EpisodeFileExtensionSchema>;

export const PrimaryGenreNameEnumSchema = z.enum(["Music Commentary"]);
export type PrimaryGenreNameEnum = z.infer<typeof PrimaryGenreNameEnumSchema>;

export const KindSchema = z.enum(["podcast", "podcast-episode"]);
export type Kind = z.infer<typeof KindSchema>;

export const WrapperTypeSchema = z.enum(["podcastEpisode", "track"]);
export type WrapperType = z.infer<typeof WrapperTypeSchema>;

export const GenreClassSchema = z.object({
  name: PrimaryGenreNameEnumSchema,
  id: z.string(),
});
export type GenreClass = z.infer<typeof GenreClassSchema>;

export const ResultSchema = z.object({
  wrapperType: WrapperTypeSchema,
  kind: KindSchema,
  artistId: z.union([z.number(), z.null()]).optional(),
  collectionId: z.number(),
  trackId: z.number(),
  artistName: z.union([z.null(), z.string()]).optional(),
  collectionName: NameSchema,
  trackName: z.string(),
  collectionCensoredName: z.union([NameSchema, z.null()]).optional(),
  trackCensoredName: z.union([NameSchema, z.null()]).optional(),
  artistViewUrl: z.string(),
  collectionViewUrl: z.string(),
  feedUrl: z.string(),
  trackViewUrl: z.string(),
  artworkUrl30: z.union([z.null(), z.string()]).optional(),
  artworkUrl60: z.string(),
  artworkUrl100: z.union([z.null(), z.string()]).optional(),
  collectionPrice: z.union([z.number(), z.null()]).optional(),
  trackPrice: z.union([z.number(), z.null()]).optional(),
  collectionHdPrice: z.union([z.number(), z.null()]).optional(),
  releaseDate: z.string(),
  collectionExplicitness: z.union([z.null(), z.string()]).optional(),
  trackExplicitness: z.union([z.null(), z.string()]).optional(),
  trackCount: z.union([z.number(), z.null()]).optional(),
  trackTimeMillis: z.number(),
  country: CountrySchema,
  currency: z.union([z.null(), z.string()]).optional(),
  primaryGenreName: z.union([PrimaryGenreNameEnumSchema, z.null()]).optional(),
  artworkUrl600: z.string(),
  genreIds: z.union([z.array(z.string()), z.null()]).optional(),
  genres: z.array(z.union([GenreClassSchema, z.string()])),
  artworkUrl160: z.union([z.null(), z.string()]).optional(),
  episodeFileExtension: z
    .union([EpisodeFileExtensionSchema, z.null()])
    .optional(),
  episodeContentType: z.union([EpisodeContentTypeSchema, z.null()]).optional(),
  closedCaptioning: z.union([ClosedCaptioningSchema, z.null()]).optional(),
  description: z.union([z.null(), z.string()]).optional(),
  artistIds: z.union([z.array(z.number()), z.null()]).optional(),
  episodeUrl: z.union([z.null(), z.string()]).optional(),
  shortDescription: z.union([z.null(), z.string()]).optional(),
  previewUrl: z.union([z.null(), z.string()]).optional(),
  episodeGuid: z.union([z.null(), z.string()]).optional(),
});
export type Result = z.infer<typeof ResultSchema>;

export const PodcastDetailSchema = z.object({
  resultCount: z.number(),
  results: z.array(ResultSchema),
});
export type PodcastDetail = z.infer<typeof PodcastDetailSchema>;
