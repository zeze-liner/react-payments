import { ChangeEvent, useCallback } from 'react';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { MAX_LENGTH_SECURITY_CODE } from '@/features/card/constants/maxLength';
import { NUMBER_PARSABLE_STRING_PATTERN } from '@/features/card/constants/regExp';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';

interface Props {
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

export const useChangeSecurityCode = ({ onChange }: Props) => {
  const onChangeSecurityCode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_SECURITY_CODE,
        }) ||
        checkIsDeleteInputType(nativeEvent as InputEvent)
      ) {
        onChange<'securityCode'>('securityCode', value);
      }
    },
    [onChange],
  );

  return { onChangeSecurityCode };
};
