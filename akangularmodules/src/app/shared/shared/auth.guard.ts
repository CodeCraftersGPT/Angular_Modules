
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('token')) {
    return true;
  }
  else {
    // return to login page
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
};

