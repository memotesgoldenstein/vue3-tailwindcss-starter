interface BaseModel {
  id?: string;
  text: string;
  __typename: string;
}

interface PrimaryImage extends BaseModel {
  width: number;
  height: number;
  url: string;
}

interface ReleaseYear {
  year: number;
  endYear: number;
  __typename: string;
}

interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
  __typename: string;
}

export default interface PopularTitles extends BaseModel {
  titleText?: BaseModel;
  titleType?: BaseModel;
  originalTitleText?: BaseModel;
  primaryImage?: PrimaryImage;
  releaseYear?: ReleaseYear;
  ratingsSummary?: RatingsSummary;
}
