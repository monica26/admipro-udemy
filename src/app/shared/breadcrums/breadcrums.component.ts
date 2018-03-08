import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  labelPagina = '';

  constructor( private router: Router, public title: Title, public meta: Meta) {

     this.getDataRoute()
      .subscribe( data => {
        this.labelPagina = data.titulo;
        this.title.setTitle(this.labelPagina);
        const metaTag: MetaDefinition = {
          name: 'description',
          content: this.labelPagina
        };
        this.meta.updateTag(metaTag);
      });
  }

  getDataRoute() {
    return this.router.events
      .filter( event => event instanceof ActivationEnd)
      .filter( (event: ActivationEnd) => event.snapshot.firstChild === null)
      .map( (event: ActivationEnd) => event.snapshot.data);
  }

  ngOnInit() {
  }

}
