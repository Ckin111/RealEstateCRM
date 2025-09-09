import { Developers, IFourUp, ISignedValue } from '../../../interfaces';
import { BaseClass } from './baseModel';
import {
  getModelForClass,
  modelOptions,
  prop,
  PropType,
} from '@typegoose/typegoose';

export class SignedValueClass extends BaseClass implements ISignedValue {
  @prop({ type: String, required: true })
  signedBy: Developers;
  @prop({ type: String, required: true })
  value: string;

  constructor() {
    super();
    this.signedBy = '' as Developers;
    this.value = '';
  }

  setSignedBy(value: Developers) {
    this.signedBy = value;
    return this;
  }

  setValue(value: string) {
    this.value = value;
    return this;
  }

  setClass(props: ISignedValue) {
    this.value = props.value;
    this.signedBy = props.signedBy;
    return this;
  }

  isValid(): [boolean, string] {
    if (!this.signedBy || this.signedBy.length === 0)
      return [false, `Invalid input for attribute: signedBy`];
    if (!this.value || this.value.length === 0)
      return [false, `Invalid input for attribute: value`];
    return [true, ``];
  }

  toClass() {
    return new SignedValueClass().setClass(this);
  }
}

@modelOptions({ schemaOptions: { collection: 'FourUps' } })
export class FourUpClass extends BaseClass implements IFourUp {
  fourUpId: string;
  @prop(
    { type: () => [SignedValueClass], required: true, _id: false },
    PropType.ARRAY,
  )
  progress: ISignedValue[];
  @prop(
    { type: () => [SignedValueClass], required: true, _id: false },
    PropType.ARRAY,
  )
  planned: ISignedValue[];
  @prop({ type: () => [String], required: true, _id: false }, PropType.ARRAY)
  risks: string[];
  @prop({ type: () => [String], required: true, _id: false }, PropType.ARRAY)
  needs: string[];

  constructor() {
    super();
    this.fourUpId = '';
    this.progress = [];
    this.planned = [];
    this.risks = [];
    this.needs = [];
  }

  setFourUpId(value: string) {
    this.fourUpId = value;
    return this;
  }

  setProgress(value: ISignedValue[]) {
    this.progress = value;
    return this;
  }

  setPlanned(value: ISignedValue[]) {
    this.planned = value;
    return this;
  }

  setRisks(value: string[]) {
    this.risks = value;
    return this;
  }

  setNeeds(value: string[]) {
    this.needs = value;
    return this;
  }

  setClass(props: IFourUp) {
    this.setProgress(props.progress);
    this.setPlanned(props.planned);
    this.setRisks(props.risks);
    this.setNeeds(props.needs);
    this.setFourUpId(props.fourUpId);
    return this;
  }

  isValid(): [boolean, string] {
    if (!Array.isArray(this.progress))
      return [false, `Invalid input for attribute: progress`];
    if (!Array.isArray(this.planned))
      return [false, `Invalid input for attribute: planned`];
    if (!Array.isArray(this.risks))
      return [false, `Invalid input for attribute: risks`];
    if (!Array.isArray(this.needs))
      return [false, `Invalid input for attribute: needs`];
    return [true, ``];
  }

  toClass() {
    return new FourUpClass().setClass(this);
  }
}

export const FourUpModel = getModelForClass(FourUpClass);
