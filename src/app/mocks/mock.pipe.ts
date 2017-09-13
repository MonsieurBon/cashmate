import { Pipe, PipeTransform } from '@angular/core';

export function MockPipe(options: Pipe): PipeTransform {
  const metadata: Pipe = {
    name: options.name,
    pure: options.pure || false
  };

  class Mock implements PipeTransform {
    transform(value: any, args?: any) {
      return value;
    }
  }

  return Pipe(metadata)(Mock as any);
}
