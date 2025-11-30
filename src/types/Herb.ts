export interface Herb {
  ID: number | string;
  Name: string;
  ScientificName?: string;
  Description: string;
  Usage?: string;
  ImageUrl?: string;
  Category: string;
  NHSO_Price?: string;
  Per_Course?: string;
  ICD10?: string;
  Benefits?: string;
}

export interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
}
