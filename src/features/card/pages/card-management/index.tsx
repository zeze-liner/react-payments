import { CARD_REGISTRATION_STEPS, TSteps } from '@/features/card/constants/step';
import { useStepper } from '@/hooks/useStepper';
import { CardInventoryPage } from '@/features/card/pages/card-inventory';
import { AddCardPage } from '@/features/card/pages/add-card';
import { CompleteAddPage } from '@/features/card/pages/complete-add';
import { CardProvider } from '@/features/card/providers/CardProvider';

export const CardManagementPage = () => {
  const { Stepper, Step, setStep } = useStepper<TSteps>(CARD_REGISTRATION_STEPS);

  const onChangeStep = (step: 0 | 1 | 2) => {
    setStep(CARD_REGISTRATION_STEPS[step]);
  };

  return (
    <CardProvider>
      <Stepper>
        <Step name={CARD_REGISTRATION_STEPS[0]}>
          <CardInventoryPage onChangeStep={onChangeStep} />
        </Step>
        <Step name={CARD_REGISTRATION_STEPS[1]}>
          <AddCardPage onPrev={() => onChangeStep(0)} onNext={() => onChangeStep(2)} />
        </Step>
        <Step name={CARD_REGISTRATION_STEPS[2]}>
          <CompleteAddPage onNext={() => onChangeStep(0)} />
        </Step>
      </Stepper>
    </CardProvider>
  );
};
