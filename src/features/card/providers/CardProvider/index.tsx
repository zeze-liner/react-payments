import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CARD_INPUT } from '@/features/card/constants/cardInputValue';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';

interface CardContextInterface {
  input: CardInputInterface;
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
}

const CardContext = createContext<CardContextInterface | null>(null);

interface Props {
  children: ReactNode;
}

const CardProvider = ({ children }: Props) => {
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

  const value = useMemo(
    () => ({
      input,
      onChange,
    }),
    [input, onChange],
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};

export { CardProvider, useCard };
