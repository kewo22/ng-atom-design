import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  label: string = 'Click';

  @Input()
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  @Input()
  size: 'sm' | 'md' | 'lg' = 'lg';

  @Input()
  disabled: boolean = false;

  @Output()
  click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    return ['storybook-button', `storybook-button--${this.size}`, `storybook-button--${this.type}`];
  }

  onClick(e: MouseEvent): void {
    this.click.emit(e)
  }

}
