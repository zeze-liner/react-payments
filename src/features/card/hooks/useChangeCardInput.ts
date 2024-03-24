import { useCard } from '@/features/card/providers/CardProvider';
import { useChangeCardNumber } from './useChangeCardNumber';
import { useChangeExpirationDate } from './useChangeExpirationDate';
import { useChangeOwner } from './useChangeOwner';
import { useChangeSecurityCode } from './useChangeSecurityCode';
import { useChangePassword } from './useChangePassword';

export const useChangeCardInput = () => {
  const { input, onChange } = useCard();

  const { onChangeNumber } = useChangeCardNumber({ input, onChange });
  const { onChangeExpirationDate } = useChangeExpirationDate({ input, onChange });
  const { onChangeOwner } = useChangeOwner({ onChange });
  const { onChangeSecurityCode } = useChangeSecurityCode({ onChange });
  const { onChangePassword } = useChangePassword({ input, onChange });

  return {
    input,
    onChange,
    onChangeNumber,
    onChangeExpirationDate,
    onChangeOwner,
    onChangeSecurityCode,
    onChangePassword,
  };
};
