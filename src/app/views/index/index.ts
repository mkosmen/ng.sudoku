import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  protected readonly blocks = [2, 3];
  selectedBlock = signal<number>(2);

  select(idx: number) {
    this.selectedBlock.set(idx);
  }
}
