import {Validators} from 'loco-js-model';
import BaseView from './src/views/base.coffee';
import Controllers from './src/controllers';
import Env from './src/env';
import Loco from './src/base/loco.coffee';
import Models from './src/models';
import Wire from './src/base/wire.coffee';
import en from './src/locales/en.coffee';

const I18n = {en};
const Views = {Base: BaseView};

export {
  Controllers,
  Env,
  I18n,
  Loco,
  Models,
  Validators,
  Views,
  Wire
};