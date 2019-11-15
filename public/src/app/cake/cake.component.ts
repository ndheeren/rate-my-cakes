import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cake',
    templateUrl: './cake.component.html',
    styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
    @Input() cakeToShow: any;  // use the @Input decorator to indicate this comes from the parent
  
    constructor() { }

    ngOnInit() {
    }

    calculateAverageRating() : number {
        var sum = 0;
        var numberOfRatings = this.cakeToShow.ratings.length;
        for (var rating of this.cakeToShow.ratings) {
            console.log(`rating.numberOfStars = ${rating.numberOfStars}`);
            console.log(`typeof(rating.numberOfStars) = ${typeof(rating.numberOfStars)}`)
            sum += rating.numberOfStars;
        }
        return sum / numberOfRatings;
    }

}
