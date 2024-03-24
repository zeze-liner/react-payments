import { DISPLAY_SECURITY_CHARACTER } from '@/features/card/constants/display';
import { CardNumber } from '@/features/card/types/cardInputTypes';

const formattedPaddedValue = (value: string, length: number) => value.padEnd(length, ' ');
const formattedPasswordStyle = (value: string) => value.replace(/./g, DISPLAY_SECURITY_CHARACTER);

export const formattedDisplayCardNumber = (cardNumber: CardNumber) => {
  const hasOnlyFirstCardNumber = !cardNumber.fourth && !cardNumber.third && !cardNumber.second;
  if (hasOnlyFirstCardNumber) {
    return cardNumber.first;
  }

  const formattedFirst = formattedPaddedValue(cardNumber.first, 4);
  const formattedSecond = formattedPaddedValue(cardNumber.second, 4);
  const hasOnlyFirstAndSecondCardNumber = !cardNumber.fourth && !cardNumber.third;
  if (hasOnlyFirstAndSecondCardNumber) {
    return `${formattedFirst} ${formattedSecond}`;
  }

  const formattedThird = formattedPaddedValue(formattedPasswordStyle(cardNumber.third), 4);
  const hasOnlyFirstAndSecondAndThirdCardNumber = !cardNumber.fourth;
  if (hasOnlyFirstAndSecondAndThirdCardNumber) {
    return `${formattedFirst} ${formattedSecond} ${formattedThird}`;
  }

  const formattedFourth = formattedPaddedValue(formattedPasswordStyle(cardNumber.fourth), 4);
  return `${formattedFirst} ${formattedSecond} ${formattedThird} ${formattedFourth}`;
};

export const formattedExpirationDateMM = (MM: string) => {
  const parsedMM = +MM;
  if (parsedMM === 0) {
    return '';
  }

  return parsedMM >= 2 && parsedMM <= 9 ? `0${MM}` : MM;
};
