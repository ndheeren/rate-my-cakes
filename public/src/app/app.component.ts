import { Component, OnInit  } from '@angular/core';

import { HttpService } from './http.service';
import { debug } from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'public';
    cakes = [];
    cakeIsSelected = false;
    selectedCake;
    newCake: any;
    newRating: any;
    
    constructor(private _httpService: HttpService){} // Inject the service into the root component
    
    ngOnInit(){
        this.newCake = { bakerName: "", imageURL: "" }
        this.newRating = { numberOfStars: "", comment: "" }
        this.showAllCakes();
    }

    showAllCakes(): void {
        this.cakes = []; // resetting it first

        let observable = this._httpService.getCakes();
        observable.subscribe(data => {
            console.log("Got our cakes!", data);

            for (var key in data)
            {
                this.cakes.push(data[key]);
            }
        });
    }

    submitCakeAddition() {
        // Code to send off the form data (this.newCake) to the Service
        let observable = this._httpService.addCake(this.newCake);
        observable.subscribe(data => {
            // console.log(`The subscription portion of submitCakeAddition() has run.`);
            // console.log(data);
            
            this.newCake = { bakerName: "", imageURL: "" } // Reset this to a new, clean object
            this.showAllCakes();
        });
    }

    showCake(cake) {
        // console.log(`The cake of ${cake.bakerName} was selected!`);
        this.cakeIsSelected = true;
        this.selectedCake = cake;
    }

    submitRatingAddition(cakeId) {
        // Code to send off the form data to the Service
        let observable = this._httpService.addRatingToCake(cakeId, this.newRating);
        observable.subscribe(data => {
            // console.log(`The subscription portion of submitCakeAddition() has run.`);
            // console.log(data);
            
            this.newRating = { numberOfStars: "", comment: "" } // Reset this to a new, clean object
            this.showAllCakes();
        });
    }
}
