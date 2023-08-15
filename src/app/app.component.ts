import { Component, OnInit } from '@angular/core';
import { CatalogueService } from "./cat.service";
import {Router} from "@angular/router"; // Correct the import

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ecomm-web';
    // @ts-ignore
    public categories;
// @ts-ignore
    public currentcategory;
    constructor(private catalogueService: CatalogueService, private router:Router) {} // Correct the parameter name

    ngOnInit(): void {
        this.getCategories();
    }

    private getCategories() {
        this.catalogueService.getResource("/categories").subscribe(
            (data: any) => {
                this.categories = data;
            },
            err => {
                console.log(err);
            }
        );
    }

    // @ts-ignore
    getProductsByCat(c) {
      this.currentcategory=c;
        this.router.navigateByUrl('/products/2/'+c.id);

    }

    onSelectedProducts()
    {
      this.currentcategory=undefined;
this.router.navigateByUrl("/products/1/0");

    }

}
