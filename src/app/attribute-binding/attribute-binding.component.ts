import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  template: `
  <table>
    <tr>
      <td [attr.colspan]="colspanSize">2セル分を1セルとする</td>
    </tr>
    <tr>
      <td>1セル目</td>
      <td>2セル目</td>
    <tr>
  <table>
  `,
  styles: [
    'table, tr{ border: solid 1px #333; }'
  ]
})
export class AttributeBindingComponent {
  colspanSize = 2;
}
