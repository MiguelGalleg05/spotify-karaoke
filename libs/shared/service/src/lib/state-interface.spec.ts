import { StateInterface } from './state-interface';

interface StateInterfaceMock {
  a: string;
  b: string;
}
describe('StateInterface', () => {
  let service: StateInterface<StateInterfaceMock>;
  const data = { a: 'a', b: 'b' };

  beforeEach(() => {
    service = new StateInterface();
  });

  it('should save given data', () => {
    service.setState(data);

    expect(service.state$.value).toEqual(data);
  });

  it('should update data partially if part given', () => {
    service.setState(data);

    const newAValue = { a: 'c' };
    service.setState(newAValue);

    expect(service.state$.value).toEqual({ ...data, ...newAValue });
  });
});
