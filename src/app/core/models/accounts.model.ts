import { AccountDetailFront } from './account-detail.model';

export interface Account {
  id: string;
  name: string;
  category: string;
  tag: string;
  balance: number;
  availableBalance: number;
}

export enum FieldsAccount {
  ID = 'id',
  NAME = 'Name',
  CATEGORY = 'Category',
  TAG = 'Tag',
  BALANCE = 'Balance',
  AVAILABE_BALANCE = 'Available Balance',
  DETAIL_BUTTON = 'detailButton',
}

export const ACCOUNT_FIELDS = [
  FieldsAccount.ID,
  FieldsAccount.NAME,
  FieldsAccount.CATEGORY,
  FieldsAccount.TAG,
  FieldsAccount.BALANCE,
  FieldsAccount.AVAILABE_BALANCE,
  'detailButton',
];

export type AccountGroup = Account | AccountDetailFront | null;
