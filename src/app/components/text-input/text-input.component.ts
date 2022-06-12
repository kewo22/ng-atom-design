import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input()
  label: string = 'Click';

  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  // @Input()
  // type: 'success' | 'danger' | 'warning' = 'success';

  @Input()
  helperText: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public get labelClasses(): string[] {
    return ['storybook-input-label'];
  }

  public get wrapperClasses(): string[] {
    return ['storybook-input-wrapper'];
    // return ['storybook-button', `storybook-button--${this.size}`, `storybook-button--${this.type}`];
  }

  public get inputClasses(): string[] {
    return ['storybook-input', `storybook-input--${this.size}`];
    // `storybook-input--${this.type}`
  }

  public get helperTextClasses(): string[] {
    return ['storybook-helper-text', 'mt-2'];
  }

}
