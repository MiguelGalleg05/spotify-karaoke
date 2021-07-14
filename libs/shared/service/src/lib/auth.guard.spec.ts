import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthStore } from './auth.store';

describe('AuthGuard (isolated)', () => {
  let guard: AuthGuard;

  const routerMock = {
    navigate: jest.fn(),
  } as unknown as Router;
  const authStoreMock = (logged = true) => {
    return {
      isLogged: jest.fn(() => logged),
    } as unknown as AuthStore;
  };

  const privateRoutes = ['/lyrics', '/dashboard'];
  let publicRoutes;
  const routeMock = {} as ActivatedRouteSnapshot;
  const routerStateMock = (url: string) => {
    return {
      url,
    } as RouterStateSnapshot;
  };

  beforeEach(() => {
    guard = new AuthGuard(routerMock, authStoreMock());
    publicRoutes = guard.publicRoutes;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when user is logged', () => {
    it('', () => {
      [...publicRoutes, ...privateRoutes].forEach((route) => {
        expect(
          guard.canActivate(routeMock, routerStateMock(route))
        ).toBeTruthy();
      });
    });
  });

  describe('when user is not logged', () => {
    beforeEach(() => {
      guard = new AuthGuard(routerMock, authStoreMock(false));
    });
    it('should allow for public routes', () => {
      [...publicRoutes].forEach((route) => {
        expect(
          guard.canActivate(routeMock, routerStateMock(route))
        ).toBeTruthy();
      });
    });
    it('should not allow for private routes', () => {
      [...privateRoutes].forEach((route) => {
        expect(
          guard.canActivate(routeMock, routerStateMock(route))
        ).toBeFalsy();
      });
    });
    it('should redirect to login page and save returnUrl if user tries to access private route', () => {
      const privateRoute = privateRoutes[0];
      guard.canActivate(routeMock, routerStateMock(privateRoute));

      expect(routerMock.navigate).toHaveBeenCalledWith(['/login'], {
        queryParams: { returnUrl: privateRoute },
      });
    });
  });
});
