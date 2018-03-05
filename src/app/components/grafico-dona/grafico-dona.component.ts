import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() data;
  @Input() labels;
  @Input() chartType;

  constructor() { }

  ngOnInit() {
  }

}
