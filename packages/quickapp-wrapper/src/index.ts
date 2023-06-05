import actionWrapper from './action';
import mixinWrapper from './mixin';
import { compose } from './utils';

const pageActionWrapper = actionWrapper('page');
const componentActionWrapper = actionWrapper('component');

const pageMixinWrapper = mixinWrapper('page');
const componentMixinWrapper = mixinWrapper('component');

const pageWrapper = compose(pageActionWrapper, pageMixinWrapper);
const componentWrapper = compose(componentActionWrapper, componentMixinWrapper);

export { 
  pageActionWrapper,
  componentActionWrapper,
  pageMixinWrapper, 
  componentMixinWrapper,
  pageWrapper,
  componentWrapper
};