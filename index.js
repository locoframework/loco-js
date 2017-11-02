import {Validators} from 'loco-js-model';
import BaseView from './src/views/base.coffee';
import Controllers from './src/controllers';
import Env from './src/env';
import I18n from './src/i18n';
import Loco from './src/base/loco.coffee';
import Models from './src/models';
import Services from './src/services';
import Wire from './src/base/wire.coffee';

const Views = {Base: BaseView};

export {
  Controllers,
  Env,
  I18n,
  Loco,
  Models,
  Services,
  Validators,
  Views,
  Wire
};