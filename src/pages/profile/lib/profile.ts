export interface UserProfile {

  ID: number,
  imagesIndexes: number[],
  FirstName: string,
  LastName: string,
  Age: number,
  Gender: string,
  Target: string,
  About: string,
  imagesURLs: string[],
}

export interface ImgData {
  file: File;
  index: number; 
}
