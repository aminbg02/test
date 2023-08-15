import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../cat.service";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";

// @ts-ignore
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements  OnInit{
    // @ts-ignore
    public products;
    activatedRoute: any;

    constructor(
        public catService: CatalogueService,
        private route: ActivatedRoute,
        private router: Router // Correct parameter name should be "router", not "routeur"
    ) {

    }

    ngOnInit(): void {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                let url = val.url;
                console.log(url);
        // @ts-ignore
        let p1=this.route.snapshot.params.p1 ;
        if ( p1==1)
        {
            this.getProducts("/products/search/selectedProducts")
        }
        else if  (p1==2) {
            // @ts-ignore
            let p2=this.route.snapshot.params.p2 ;
            // @ts-ignore
            let idCat=this.route.snapshot.params.p2 ;
            this.getProducts("/categories/"+idCat+"/products")

        }       }
        });
        // @ts-ignore
        let p1=this.route.snapshot.params.p1;
        if ( p1==1)
        {
            this.getProducts("/products/search/selectedProducts")
        }

    }

    // @ts-ignore
    private getProducts(url)
    {
        this.catService.getResource(url).
        subscribe(data=>{this.products=data;},err=>{console.log(err)} ) ;
    }
}
