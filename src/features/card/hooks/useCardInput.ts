import { useCallback, useMemo, useState } from 'react';
import { CARD_INPUT } from '@/features/card/constants/cardInputValue';

import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { useChangeCardNumber } from './useChangeCardNumber';
import { useChangeExpirationDate } from './useChangeExpirationDate';
import { useChangeOwner } from './useChangeOwner';
import { useChangeSecurityCode } from './useChangeSecurityCode';
import { useChangePassword } from './useChangePassword';
import { checkIsValidCardForm } from '../utils/validator';

export const useCardInput = () => {
  const [input, setInput] = useState(CARD_INPUT);

  const onChange = useCallback(
    <T extends keyof CardInputInterface>(
      prop: keyof CardInputInterface,
      nextVal: CardInputInterface[T],
    ) => {
      setInput((prev) => ({ ...prev, [prop]: nextVal }));
    },
    [setInput],
  );

  const { onChangeNumber } = useChangeCardNumber({ input, onChange });
  const { onChangeExpirationDate } = useChangeExpirationDate({ input, onChange });
  const { onChangeOwner } = useChangeOwner({ onChange });
  const { onChangeSecurityCode } = useChangeSecurityCode({ onChange });
  const { onChangePassword } = useChangePassword({ input, onChange });
  const isValidCardForm = useMemo(() => checkIsValidCardForm(input), [input]);

  return {
    input,
    onChange,
    onChangeNumber,
    onChangeExpirationDate,
    onChangeOwner,
    onChangeSecurityCode,
    onChangePassword,
    isValidCardForm,
  };
};
