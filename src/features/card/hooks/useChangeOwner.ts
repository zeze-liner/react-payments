import { ChangeEvent, useCallback } from 'react';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/maxLength';
import { checkIsValidLength } from '@/features/card/utils/validator';

interface Props {
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

export const useChangeOwner = ({ onChange }: Props) => {
  const onChangeOwner = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!checkIsValidLength(value, MAX_LENGTH_CARD_OWNER_NAME)) {
        return;
      }

      onChange<'ownerName'>('ownerName', value);
    },
    [onChange],
  );

  return { onChangeOwner };
};
