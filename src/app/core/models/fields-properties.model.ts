import { FieldsAccountDetail } from './account-detail.model';
import { FieldsAccount } from './accounts.model';

export const PROPERTIES_FIELDS_DTO = {
  [FieldsAccount.ID as string]: 'id',
  [FieldsAccount.NAME as string]: 'name',
  [FieldsAccount.CATEGORY as string]: 'category',
  [FieldsAccount.TAG as string]: 'tag',
  [FieldsAccount.BALANCE as string]: 'balance',
  [FieldsAccount.AVAILABE_BALANCE as string]: 'availableBalance',
  [FieldsAccountDetail.ORDER_CODE as string]: 'order_code',
  [FieldsAccountDetail.ORDER_ID as string]: 'order_id',
  [FieldsAccountDetail.TRANSACTION_TYPE as string]: 'transaction_type',
  [FieldsAccountDetail.DEBIT as string]: 'debit',
  [FieldsAccountDetail.CREDIT as string]: 'credit',
  [FieldsAccountDetail.ACCOUNT_ID as string]: 'account_id',
  [FieldsAccountDetail.BALANCE as string]: 'balance',
  [FieldsAccountDetail.CONFIRMATION_DATE as string]: 'confirmation_date',
};

interface FieldsProperties {
  [key: string]: string;
}

export const FIELDS_PROPERTIES_DTO: FieldsProperties = {
  id: FieldsAccount.ID as string,
  name: FieldsAccount.NAME as string,
  category: FieldsAccount.CATEGORY as string,
  tag: FieldsAccount.TAG as string,
  balance: FieldsAccount.BALANCE as string,
  availableBalance: FieldsAccount.AVAILABE_BALANCE as string,
  order_code: FieldsAccountDetail.ORDER_CODE as string,
  order_id: FieldsAccountDetail.ORDER_ID as string,
  transaction_type: FieldsAccountDetail.TRANSACTION_TYPE as string,
  debit: FieldsAccountDetail.DEBIT as string,
  credit: FieldsAccountDetail.CREDIT as string,
  account_id: FieldsAccountDetail.ACCOUNT_ID as string,
  confirmation_date: FieldsAccountDetail.CONFIRMATION_DATE as string,
};
