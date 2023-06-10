declare const componentLifecycle: readonly ["onInit", "onReady", "onDestroy"];
declare const pageLifecycle: readonly ["onInit", "onReady", "onDestroy", "onShow", "onHide", "onBackPress", "onMenuPress", "onRefresh", "onConfigurationChanged", "onReachTop", "onReachBottom", "onPageScroll"];
declare const optionsDataKey: readonly ["data", "private", "public", "props", "computed"];

type OptionsData = {
    [key in typeof optionsDataKey[number]]?: object;
};
type PageOptionsLifecycle = {
    [key in typeof pageLifecycle[number]]?: () => void;
};
type ComponentOptionsLifecycle = {
    [key in typeof componentLifecycle[number]]?: () => void;
};
type PageOptions = OptionsData & PageOptionsLifecycle & Record<string, () => {}>;
type ComponentOptions = OptionsData & ComponentOptionsLifecycle & Record<string, () => {}>;
type PageOptionsWithMixin = PageOptions & {
    mixins: PageOptions[];
};
type ComponentOptionsWithMixin = ComponentOptions & {
    mixins: PageOptions[];
};

declare const pageActionWrapper: (options: PageOptions | ComponentOptions) => PageOptions | ComponentOptions;
declare const componentActionWrapper: (options: PageOptions | ComponentOptions) => PageOptions | ComponentOptions;
declare const pageMixinWrapper: (options: PageOptionsWithMixin | ComponentOptionsWithMixin) => PageOptionsWithMixin | ComponentOptionsWithMixin;
declare const componentMixinWrapper: (options: PageOptionsWithMixin | ComponentOptionsWithMixin) => PageOptionsWithMixin | ComponentOptionsWithMixin;
declare const pageWrapper: (...args: any[]) => any;
declare const componentWrapper: (...args: any[]) => any;

export { componentActionWrapper, componentMixinWrapper, componentWrapper, pageActionWrapper, pageMixinWrapper, pageWrapper };
