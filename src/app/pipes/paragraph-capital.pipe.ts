import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const formatted = value
      .trim()
      .replace(/  +/, ' ')
      .split('.')
      .filter(Boolean)
      .map((p) => {
        const trimmed = p.trim();
        return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
      })
      .join('. ');

    return formatted.length ? formatted + '.' : '';
  }
}
