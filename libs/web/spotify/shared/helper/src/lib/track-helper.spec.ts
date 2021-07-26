import { TrackHelper } from './track-helper';

describe('TrackHelper', () => {
  it('should create an instance', () => {
    expect(new TrackHelper()).toBeTruthy();
  });
  it('should transform seconds into minutes', () => {
    expect(TrackHelper.time(120)).toEqual('2:00');
  });
  it('should transform seconds into hours and minutes', () => {
    expect(TrackHelper.time(120 + 60 * 60)).toEqual('1:2:00');
  });
});
