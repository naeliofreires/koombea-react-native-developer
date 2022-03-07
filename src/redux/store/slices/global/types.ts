export enum WARNS {
  ONBOARDING = 'ONBOARDING',
}

export type GlobalState = {
  warns: Record<string, WARNS>;
};
