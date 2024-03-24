import { useMemo } from 'react';
import { useCard } from '@/features/card/providers/CardProvider';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import {
  checkIsValidCardNumber,
  checkIsValidCompanyName,
  checkIsValidExpirationDate,
  checkIsValidPassword,
  checkIsValidSecurityCode,
} from '@/features/card/utils/validator';

const checkIsValidCardForm = (cardInput: CardInputInterface) => {
  return (
    checkIsValidCompanyName(cardInput.companyName) &&
    checkIsValidCardNumber(cardInput.cardNumber) &&
    checkIsValidExpirationDate(cardInput.expirationDate) &&
    checkIsValidSecurityCode(cardInput.securityCode) &&
    checkIsValidPassword(cardInput.password)
  );
};

export const useValidCardForm = () => {
  const { input } = useCard();
  const isValid = useMemo(() => checkIsValidCardForm(input), [input]);

  return { isValid };
};
