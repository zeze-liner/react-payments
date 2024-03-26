import { ChangeEvent, useCallback } from 'react';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { NUMBER_PARSABLE_STRING_PATTERN } from '@/features/card/constants/regExp';
import { MAX_LENGTH_PIECE_CARD_NUMBER } from '@/features/card/constants/maxLength';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';

interface Props {
  input: CardInputInterface;
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

export const useChangeCardNumber = ({ input, onChange }: Props) => {
  const onChangeNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['cardNumber']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_CARD_NUMBER,
        }) ||
        checkIsDeleteInputType(nativeEvent as InputEvent)
      ) {
        onChange<'cardNumber'>('cardNumber', { ...input.cardNumber, [section]: value });
      }
    },
    [input.cardNumber, onChange],
  );

  return { onChangeNumber };
};
