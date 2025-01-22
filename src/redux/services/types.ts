export interface IPagination<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: Array<T>;
}

export interface IPaginationParams {
  page?: number;
  page_size?: number;
  ordering?: string;
  search?: string;
}

export interface ILimitOffsetPaginationParams {
  offset: number;
  limit: number;
  ordering?: string;
}

export interface ISelectOption {
  label: string;
  value: string;
}

export type TRoutePath = string | string[] | undefined | number; // router.query의 반환값
