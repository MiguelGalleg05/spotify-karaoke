export const createSpyObj = (baseName, methodNames): { [key: string]: any } => {
  const obj: any = {};

  for (let i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};

it('createSpyObj', () => {
  expect(true).toBeTruthy();
});
