import { TrackTime } from './track-time.pipe';

describe('MillisecondPipe', () => {
  let pipe: TrackTime;
  beforeEach(() => {
    pipe = new TrackTime();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a time', () => {
    expect(pipe.transform(120)).toEqual('2:00');
  });
});
