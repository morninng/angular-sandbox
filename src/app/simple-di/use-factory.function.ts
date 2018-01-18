export function useFactoryFn(simpleDiService, dummyService) {
  return {
    message: simpleDiService.message,
    count: dummyService.count
  };
}
