import { isPlainObject } from 'lodash';
import { PageOptions, ComponentOptions, PageOptionsWithMixin, ComponentOptionsWithMixin, OptionsType } from './types';
import { optionsDataKey, lifecycleMap } from './config';

const _merge = <T extends PageOptions | ComponentOptions>(mixins: T[], options: T, type: OptionsType): void => {
  mixins.forEach((mixin) => {
    if (isPlainObject(mixin)) {
      Object.keys(mixin).forEach((key) => {
        if (optionsDataKey.includes(key as any)) {
          options[key as typeof optionsDataKey[number]] = { ...mixin[key], ...options[key] };
        } else if (lifecycleMap[type].includes(key as any)) {
          const nativeLifecycle = options[key];
          options[key] = function (...args: []) {
            mixin[key].apply(this, args);
            return nativeLifecycle && nativeLifecycle.apply(this, args);
          }
        } else {
          options[key] = mixin[key]
        }
      })
    }
  })
}

const mixinWrapper = (type: OptionsType) => {
  return function (options: PageOptionsWithMixin | ComponentOptionsWithMixin) {
    const { mixins } = options;
    if (Array.isArray(mixins) && mixins.length) {
      Reflect.deleteProperty(options, 'mixins');
      _merge(mixins, options, type);
    }
  }
}

export default mixinWrapper;

