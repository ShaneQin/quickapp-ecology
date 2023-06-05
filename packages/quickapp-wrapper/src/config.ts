export const appLifecycle = ['onCreate', 'onRequest', 'onShow', 'onHide', 'onDestroy', 'onError', 'onPageNotFound'] as const;
export const componentLifecycle = ['onInit', 'onReady', 'onDestroy'] as const;
export const pageLifecycle = [...componentLifecycle, 'onShow', 'onHide', 'onBackPress', 'onMenuPress', 'onRefresh', 'onConfigurationChanged', 'onReachTop', 'onReachBottom', 'onPageScroll'] as const;
export const optionsDataKey = ['data', 'private', 'public', 'props', 'computed'] as const;
export const lifecycleMap = {
  app: appLifecycle,
  page: pageLifecycle,
  component: componentLifecycle
}