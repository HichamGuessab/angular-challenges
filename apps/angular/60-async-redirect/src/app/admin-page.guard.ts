import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { UserProfileService } from './user-profile.service';

export const isAdminActivate: CanActivateFn = () => {
  const router = inject(Router);
  return inject(UserProfileService)
    .getProfile()
    .pipe(
      take(1),
      map((role) =>
        role === 'admin' ? true : router.createUrlTree(['/user']),
      ),
    );
};
