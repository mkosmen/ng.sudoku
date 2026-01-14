import { Routes } from '@angular/router';
import { Index } from './views/index/index';
import { Game } from './views/game/game';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'game',
    component: Game,
  },
];
