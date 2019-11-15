import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    // adding HttpClient here is a dependency injection
    // our service depends on HttpClient to make http requests
    // by making make HttpClient an attribute in this class, our service may refer to HttpClient and use its methods
    constructor(private _http: HttpClient) {}

    // Write functions in the service that make AJAX requests to all get routes in the Restful Task API
    // '/'
    getCakes()
    {
        // our http response is an Observable, store it in a variable
        // let tempObservable = this._http.get('/allTasks');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data => console.log("Got our tasks!", data));

        return this._http.get('/allCakes');
    }

    addCake(newCake){
        return this._http.post('/cakes', newCake);
    }

    addRatingToCake(cakeId, editedCake){
        return this._http.put(`/cakes/${cakeId}`, editedCake);
    }
}
