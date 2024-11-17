import { debounce } from '../utils';

describe('Test utils', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('Check debounce function call setTimeout', () => {
    jest.spyOn(global, 'setTimeout');
    const mockFn = jest.fn();
    const debounceFunction = debounce(mockFn, 1000);
    debounceFunction();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it('Check debounce callback function call one time', () => {
    const callback = jest.fn();
    debounce(callback, 1000)();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
