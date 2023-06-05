import { optionsDataKey, pageLifecycle, componentLifecycle } from './config';

export type OptionsData = {
  [key in typeof optionsDataKey[number]]?: object;
}

type PageOptionsLifecycle = {
  [key in typeof pageLifecycle[number]]?: () => void;
}

type ComponentOptionsLifecycle = {
  [key in typeof componentLifecycle[number]]?: () => void;
}

export type OptionsType = 'app' | 'page' | 'component';

export type PageOptions = OptionsData & PageOptionsLifecycle & Record<string, () => {}>;

export type ComponentOptions = OptionsData & ComponentOptionsLifecycle & Record<string, () => {}>;

export type PageOptionsWithMixin = PageOptions & { mixins: PageOptions[] };

export type ComponentOptionsWithMixin = ComponentOptions & { mixins: PageOptions[] };
