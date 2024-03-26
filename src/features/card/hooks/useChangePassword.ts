import { ChangeEvent, useCallback } from 'react';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { MAX_LENGTH_PIECE_PASSWORD } from '@/features/card/constants/maxLength';
import { NUMBER_PARSABLE_STRING_PATTERN } from '@/features/card/constants/regExp';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';

interface Props {
  input: CardInputInterface;
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

export const useChangePassword = ({ input, onChange }: Props) => {
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['password']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_PASSWORD,
        }) ||
        checkIsDeleteInputType(nativeEvent as InputEvent)
      ) {
        onChange('password', { ...input.password, [section]: value });
      }
    },
    [input.password, onChange],
  );

  return { onChangePassword };
};
