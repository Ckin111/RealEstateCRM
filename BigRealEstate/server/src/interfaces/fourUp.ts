import { Developers } from './devs';

export type IFourUp = {
  fourUpId: string;
  progress: ISignedValue[];
  planned: ISignedValue[];
  risks: string[];
  needs: string[];
};

export type ISignedValue = {
  signedBy: Developers;
  value: string;
};
