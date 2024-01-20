interface Pagination {
  totalPage: number;
  page: number;
}

export interface PaginationUiType extends Pagination {}

export interface PaginationMetaType extends Pagination {
  totalData: number;
}

export interface PaginationType extends PaginationMetaType {
  size: number;
}
