import clsx from 'clsx';
import { Text } from '@/components/atoms/Text';

interface Props {
  cardNumber: string;
  textClassName?: 'card-text__big';
}

export const CardNumber = ({ cardNumber, textClassName }: Props) => {
  return (
    <div className="card-bottom__number">
      <Text className={clsx('card-text', textClassName)}>{cardNumber}</Text>
    </div>
  );
};
