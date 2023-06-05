import { ComponentOptions, PageOptions, OptionsType } from './types';
import { isFunction } from 'lodash';

const handlePageAction = (options: PageOptions) => {
  const originOnShow = options.onShow;
  const originOnHide = options.onHide;
  const originOnBackPress = options.onBackPress;
  options.onShow = function() {
    if (isFunction(originOnShow)) {
      originOnShow.call(this);
    }
    // @ts-ignore
    this.$broadcast('__onPageShow__');
  }
  options.onHide = function() {
    if (isFunction(originOnHide)) {
      originOnHide.call(this);
    }
    // @ts-ignore
    this.$broadcast('__onPageHide__');
  }
  options.onBackPress = function() {
    if (isFunction(originOnBackPress)) {
      originOnBackPress.call(this);
    }
    // @ts-ignore
    this.$broadcast('__onPageBackPress__');
  }
}
const handleComponentAction = (options: ComponentOptions) => {
  const originOnInit = options.onInit;
  options.onInit = function () {
    if (isFunction(originOnInit)) {
      originOnInit.call(this);
    }
    // @ts-ignore
    this.$on('__onPageShow__', () => {
      if (isFunction(options.onPageShow)) {
        options.onPageShow.call(this);
      }
    });
    // @ts-ignore
    this.$on('__onPageHide__', () => {
      if (isFunction(options.onPageHide)) {
        options.onPageHide.call(this);
      }
    });
    // @ts-ignore
    this.$on('__onPageBackPress__', () => {
      if (isFunction(options.onPageBackPress)) {
        options.onPageBackPress.call(this);
      }
    });
  }
}

const actionWrapper = (type: OptionsType) => {
  return function(options: PageOptions | ComponentOptions) {
    if (type === 'page') {
      handlePageAction(options);
    } else if (type === 'component') {
      handleComponentAction(options);
    }
  }
}

export default actionWrapper;

