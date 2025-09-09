import {
  BeAnObject,
  BeAnyObject,
  IObjectWithTypegooseFunction,
} from '@typegoose/typegoose/lib/types';
import { Document, Types } from 'mongoose';

export type MongoDoc<T> = Document<unknown, BeAnObject, T, BeAnyObject, {}> &
  Omit<
    T & {
      _id: Types.ObjectId;
    } & {
      __v: number;
    },
    'typegooseName'
  > &
  IObjectWithTypegooseFunction;
