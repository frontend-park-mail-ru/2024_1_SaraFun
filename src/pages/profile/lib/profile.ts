export interface UserProfile {

  ID: number,
  imagesIndexes: number[],
  first_name: string,
  last_name: string,
  birth_data: string,
  gender: string,
  target: string,
  about: string,
  imagesURLs: string[],
}

export interface ImgData {
  file: File;
  index: number; 
}
