import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum PAGES {
  HOME = 'Home',
  DETAILS = 'Details',
}

export type RootStackParamList = {
  Home: undefined;
  Details: {name: string; universe: string};
};

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  PAGES.DETAILS
>;
