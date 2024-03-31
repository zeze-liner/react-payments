import { useCard } from '@/features/card/providers/CardProvider';
import { ChangeEvent, useCallback } from 'react';

export const useChangeCardNickname = () => {
  const { onChange } = useCard();

  const onChangeNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = e;

      onChange<'nickname'>('nickname', value);
    },
    [onChange],
  );

  return { onChangeNickname };
};
