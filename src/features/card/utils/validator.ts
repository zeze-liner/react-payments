import { CardInputInterface } from '../types/cardInputTypes';

const checkIsValidPattern = (value: string, pattern: RegExp) => {
  return pattern.test(value);
};

export const checkIsValidLength = (value: string, length: number) => {
  return value.length <= length;
};

export const checkIsValidPatternAndLength = ({
  value,
  regExp,
  length,
}: {
  value: string;
  regExp: RegExp;
  length: number;
}) => {
  return checkIsValidPattern(value, regExp) && checkIsValidLength(value, length);
};

const checkIsValidCompanyName = (companyName: CardInputInterface['companyName']) => {
  return companyName.trim().length > 0;
};

const checkIsValidCardNumber = (cardNumber: CardInputInterface['cardNumber']) => {
  return (
    cardNumber.first.length === 4 &&
    cardNumber.second.length === 4 &&
    cardNumber.third.length === 4 &&
    cardNumber.fourth.length === 4
  );
};

const checkIsValidExpirationDate = (expirationDate: CardInputInterface['expirationDate']) => {
  return expirationDate.MM.length === 2 && expirationDate.YY.length === 2;
};

const checkIsValidSecurityCode = (securityCode: CardInputInterface['securityCode']) => {
  return securityCode.length === 3;
};

const checkIsValidPassword = (password: CardInputInterface['password']) => {
  return password.first.length === 2 && password.second.length === 2;
};

export const checkIsValidCardForm = (cardInput: CardInputInterface) => {
  return (
    checkIsValidCompanyName(cardInput.companyName) &&
    checkIsValidCardNumber(cardInput.cardNumber) &&
    checkIsValidExpirationDate(cardInput.expirationDate) &&
    checkIsValidSecurityCode(cardInput.securityCode) &&
    checkIsValidPassword(cardInput.password)
  );
};
