const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000} 
    ];
    
    const findItem = item.find( item => { // array method
        return item.name === 'Book';  // for finding item which is cheap
    
    });
    console.log(Item);
    
    const filteredItems = item.filter( item => { // method for filtering
        return item.price==1000; // item which is expensive 
    });
    
    console.log(filteredItems);
    
    const total = item.reduce((currentTotal,item) => {
        return item.price + currentTotal; // finding total 
    },0);
    console.log(total);
    