import { AddComaPipe } from './add-coma.pipe';

describe('AddComaPipe', () => {
  let pipe: AddComaPipe;
  const testStr = 'test';

  beforeAll(() => {
    pipe = new AddComaPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add coma', () => {
    expect(pipe.transform(testStr, true)).toEqual(testStr + ', ');
  });
  it('should not add coma', () => {
    expect(pipe.transform(testStr, false)).toEqual(testStr);
  });
});
