import { ChangeEvent, useCallback } from 'react';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { MAX_LENGTH_PIECE_EXPIRATION_DATE } from '@/features/card/constants/maxLength';
import {
  EXPIRATION_DATE_MM_PATTERN,
  NUMBER_PARSABLE_STRING_PATTERN,
} from '@/features/card/constants/regExp';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';
import { formattedExpirationDateMM } from '@/features/card/utils/formattedString';

interface Props {
  input: CardInputInterface;
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

export const useChangeExpirationDate = ({ input, onChange }: Props) => {
  const onChangeExpirationDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['expirationDate']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: section === 'MM' ? EXPIRATION_DATE_MM_PATTERN : NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_EXPIRATION_DATE,
        }) ||
        checkIsDeleteInputType(nativeEvent as InputEvent)
      ) {
        onChange<'expirationDate'>('expirationDate', {
          ...input.expirationDate,
          [section]: section === 'MM' ? formattedExpirationDateMM(value) : value,
        });
      }
    },
    [input.expirationDate, onChange],
  );

  return { onChangeExpirationDate };
};
