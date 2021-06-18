class API {
    static breweryData(){
        fetch("http://localhost:3000/breweries")
        .then(resp => resp.json())
        .then(breweries =>{
            breweries.forEach(brewery => {
                const{id, img, name, location} = brewery
                new Brewery(id, img, name, location)
            })
        })
    }

    
    // static getBeer(){
    //     //let id = e.target.dataset.id
    //         fetch(`http://localhost:3000/breweries/${id}/beers`)
    //         .then(resp => resp.json())
    //         .then(beers => {
    //             beers.forEach(beer => {
    //                 const{id, name, style, img, abv, ibu, brewery_id} = beer
    //                 new Beer(id, name, style, img, abv, ibu, brewery_id)
    //             })
            
    //         })
    // }       
   
}