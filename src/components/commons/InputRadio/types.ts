import {SortBy} from '~/store/Fighter/types';

export type InputRadioValue = SortBy;

export type InputRadioProps = {
  title: string;
  last?: boolean;
  selected: boolean;
  value: InputRadioValue;
  onChange(value: InputRadioValue): void;
};
