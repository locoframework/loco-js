import {Base as BaseModel, Validators} from 'loco-js-model';
import BaseView from './src_coffee/views/base.coffee';

const Controllers = {};
const Models = {Base: BaseModel};
const Views = {Base: BaseView};

export {
  Controllers,
  Models,
  Validators,
  Views
};