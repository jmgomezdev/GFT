import * as z from "zod";

export const PurpleLabelSchema = z.enum([
  "Music",
  "Music Commentary",
  "Music History",
  "Music Interviews",
]);
export type PurpleLabel = z.infer<typeof PurpleLabelSchema>;

export const FluffyLabelSchema = z.enum(["Podcast"]);
export type FluffyLabel = z.infer<typeof FluffyLabelSchema>;

export const CurrencySchema = z.enum(["USD"]);
export type Currency = z.infer<typeof CurrencySchema>;

export const ImPriceLabelSchema = z.enum(["Get"]);
export type ImPriceLabel = z.infer<typeof ImPriceLabelSchema>;

export const RelSchema = z.enum(["alternate", "self"]);
export type Rel = z.infer<typeof RelSchema>;

export const TypeSchema = z.enum(["text/html"]);
export type Type = z.infer<typeof TypeSchema>;

export const LinkAttributesSchema = z.object({
  rel: RelSchema,
  type: z.union([TypeSchema, z.null()]).optional(),
  href: z.string(),
});
export type LinkAttributes = z.infer<typeof LinkAttributesSchema>;

export const LinkSchema = z.object({
  attributes: LinkAttributesSchema,
});
export type Link = z.infer<typeof LinkSchema>;

export const IconSchema = z.object({
  label: z.string(),
});
export type Icon = z.infer<typeof IconSchema>;

export const ImReleaseDateSchema = z.object({
  label: z.string(),
  attributes: IconSchema,
});
export type ImReleaseDate = z.infer<typeof ImReleaseDateSchema>;

export const ImPriceAttributesSchema = z.object({
  amount: z.string(),
  currency: CurrencySchema,
});
export type ImPriceAttributes = z.infer<typeof ImPriceAttributesSchema>;

export const ImPriceSchema = z.object({
  label: ImPriceLabelSchema,
  attributes: ImPriceAttributesSchema,
});
export type ImPrice = z.infer<typeof ImPriceSchema>;

export const ImImageAttributesSchema = z.object({
  height: z.string(),
});
export type ImImageAttributes = z.infer<typeof ImImageAttributesSchema>;

export const ImImageSchema = z.object({
  label: z.string(),
  attributes: ImImageAttributesSchema,
});
export type ImImage = z.infer<typeof ImImageSchema>;

export const ImContentTypeAttributesSchema = z.object({
  term: FluffyLabelSchema,
  label: FluffyLabelSchema,
});
export type ImContentTypeAttributes = z.infer<
  typeof ImContentTypeAttributesSchema
>;

export const ImContentTypeSchema = z.object({
  attributes: ImContentTypeAttributesSchema,
});
export type ImContentType = z.infer<typeof ImContentTypeSchema>;

export const ImArtistAttributesSchema = z.object({
  href: z.string(),
});
export type ImArtistAttributes = z.infer<typeof ImArtistAttributesSchema>;

export const ImArtistSchema = z.object({
  label: z.string(),
  attributes: z.union([ImArtistAttributesSchema, z.null()]).optional(),
});
export type ImArtist = z.infer<typeof ImArtistSchema>;

export const IdAttributesSchema = z.object({
  "im:id": z.string(),
});
export type IdAttributes = z.infer<typeof IdAttributesSchema>;

export const IdSchema = z.object({
  label: z.string(),
  attributes: IdAttributesSchema,
});
export type Id = z.infer<typeof IdSchema>;

export const CategoryAttributesSchema = z.object({
  "im:id": z.string(),
  term: PurpleLabelSchema,
  scheme: z.string(),
  label: PurpleLabelSchema,
});
export type CategoryAttributes = z.infer<typeof CategoryAttributesSchema>;

export const CategorySchema = z.object({
  attributes: CategoryAttributesSchema,
});
export type Category = z.infer<typeof CategorySchema>;

export const EntrySchema = z.object({
  "im:name": IconSchema,
  "im:image": z.array(ImImageSchema),
  summary: IconSchema,
  "im:price": ImPriceSchema,
  "im:contentType": ImContentTypeSchema,
  rights: z.union([IconSchema, z.null()]).optional(),
  title: IconSchema,
  link: LinkSchema,
  id: IdSchema,
  "im:artist": ImArtistSchema,
  category: CategorySchema,
  "im:releaseDate": ImReleaseDateSchema,
});
export type Entry = z.infer<typeof EntrySchema>;

export const AuthorSchema = z.object({
  name: IconSchema,
  uri: IconSchema,
});
export type Author = z.infer<typeof AuthorSchema>;

export const FeedSchema = z.object({
  author: AuthorSchema,
  entry: z.array(EntrySchema),
  updated: IconSchema,
  rights: IconSchema,
  title: IconSchema,
  icon: IconSchema,
  link: z.array(LinkSchema),
  id: IconSchema,
});
export type Feed = z.infer<typeof FeedSchema>;

export const PodcastListSchema = z.object({
  feed: FeedSchema,
});
export type PodcastList = z.infer<typeof PodcastListSchema>;
