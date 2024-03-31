import { useMemo } from 'react';
import { VFlex } from '@/components/atoms/VFlex';
import { Text } from '@/components/atoms/Text';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { CardBox } from '@/features/card/components/CardBox';
import { CardChip } from '@/features/card/components/CardChip';
import { CardNumber } from '@/features/card/components/CardNumber';
import { CardInfo } from '@/features/card/components/CardInfo';
import {
  formattedDisplayCardNumber,
  formattedExpirationDate,
  formattedOwnerName,
} from '@/features/card/utils/formattedString';

interface Props {
  card: CardInputInterface;
}

export const CardInventoryItem = ({ card }: Props) => {
  const displayCardNumber = useMemo(
    () => formattedDisplayCardNumber(card.cardNumber),
    [card.cardNumber],
  );
  const displayOwnerName = formattedOwnerName(card.ownerName);
  const displayExpirationDate = formattedExpirationDate(card.expirationDate);

  return (
    <VFlex className="gap-2 flex-column-center">
      <CardBox type={CARD_BOX_TYPE.small}>
        <CardBox.Top>{card.companyName}</CardBox.Top>
        <CardBox.Middle>
          <CardChip size={CARD_CHIP_SIZE.small} />
        </CardBox.Middle>
        <CardBox.Bottom>
          <CardNumber cardNumber={displayCardNumber} />
          <CardInfo ownerName={displayOwnerName} expirationDateMMYY={displayExpirationDate} />
        </CardBox.Bottom>
      </CardBox>
      <Text className="card-nickname">{card.nickname}</Text>
    </VFlex>
  );
};
