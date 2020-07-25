const delayForLoading = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
export default delayForLoading;
