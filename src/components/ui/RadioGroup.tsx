import { type FC } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

interface RadioGroupProps {
  currentValue: string | number;
  length: number;
  handleChange: (index: number) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ currentValue, length, handleChange }) => {
  const values = Array.from({ length: length }, (_, index) => `${index}`);

  return (
    <RadixRadioGroup.Root
      className='flex gap-x-4'
      value={currentValue.toString()}
      onValueChange={(value) => handleChange(Number(value))}
    >
      {values.map((value, index) => (
        <RadixRadioGroup.Item
          key={`radio-${index}`}
          className='relative h-[7px] w-[7px] cursor-pointer rounded-full ui-state-checked:bg-primary-300 ui-state-unchecked:bg-neutral-600'
          value={value}
        >
          <RadixRadioGroup.Indicator
            className='absolute -left-[2px] -top-[2px] h-[11px] w-[11px] rounded-full border-1 border-solid border-primary-800 transition-transform ui-state-checked:scale-110 ui-state-unchecked:scale-0'
            forceMount
          />
        </RadixRadioGroup.Item>
      ))}
    </RadixRadioGroup.Root>
  );
};

export default RadioGroup;
