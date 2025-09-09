import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { Developers, IHour } from '../../../interfaces';
import { BaseClass } from './baseModel';

@modelOptions({ schemaOptions: { collection: 'TrackedHours' } })
export class HourClass extends BaseClass implements IHour {
  @prop({ type: String, required: true, unique: true })
  hourId: string;
  @prop({ type: String, required: true })
  developer: Developers;
  @prop({ type: Number, required: true })
  date: number;
  @prop({ type: Number })
  hours: number;

  constructor() {
    super();
    this.hourId = '';
    this.developer = '' as Developers;
    this.date = 0;
    this.hours = 0;
  }

  setHourId(val: string) {
    this.hourId = val;
    return this;
  }

  setDeveloper(val: Developers) {
    this.developer = val;
    return this;
  }

  setDate(val: number) {
    this.date = val;
    return this;
  }

  setHours(val: number) {
    this.hours = val;
    return this;
  }

  setClass(props: IHour) {
    this.hourId = props.hourId;
    this.developer = props.developer;
    this.date = props.date;
    this.hours = props.hours;
    return this;
  }

  isValid(): [boolean, string] {
    if (!this.hourId || this.hourId.length === 0)
      return [false, `Invalid input for attribute: hourId`];
    if (!this.developer || this.developer.length === 0)
      return [false, `Invalid input for attribute: developer`];
    if (this.date === 0) return [false, `Invalid input for attribute: date`];
    return [true, ``];
  }

  toClass() {
    return new HourClass().setClass(this);
  }
}

export const HoursModel = getModelForClass(HourClass);
