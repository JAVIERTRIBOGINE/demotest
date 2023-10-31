export interface AccountDetailFront {
  id?: number;
  account_id: number;
  order_id: string;
  order_code: string;
  transaction_type: string;
  debit: number;
  credit: number;
  balance: number;
  confirmation_date: Date;
  [key: string]: string | number | Date | undefined;
}

export enum FieldsAccountDetail {
  ID = 'id',
  ORDER_CODE = 'Order Code',
  ORDER_ID = 'Order Id',
  TRANSACTION_TYPE = 'Transaction type',
  DEBIT = 'Debit',
  CREDIT = 'Credit',
  ACCOUNT_ID = 'Account Id',
  BALANCE = 'Balance',
  CONFIRMATION_DATE = 'Confirmation date',
}

export const ACCOUNT_DETAIL_FIELDS = [
  FieldsAccountDetail.ID,
  FieldsAccountDetail.ORDER_CODE,
  FieldsAccountDetail.ORDER_ID,
  FieldsAccountDetail.TRANSACTION_TYPE,
  FieldsAccountDetail.DEBIT,
  FieldsAccountDetail.CREDIT,
  FieldsAccountDetail.ACCOUNT_ID,
  FieldsAccountDetail.BALANCE,
  FieldsAccountDetail.CONFIRMATION_DATE,
];

export const createAccountDetailMockData: (
  count: string,
  debit: number,
  credit: number,
  account_id: number,
) => AccountDetailFront = (
  count: string,
  debit: number,
  credit: number,
  account_id: number,
) => {
  return {
    order_code: 'setlement',
    order_id: 'bbbbbb' + count,
    transaction_type: 'payment received',
    debit,
    credit,
    account_id,
    balance: 0,
    confirmation_date: new Date(),
  } as AccountDetailFront;
};

export const generateRandomAlphanumeric = (): string => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }
  return result;
};
