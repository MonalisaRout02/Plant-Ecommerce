export const getFiltereddata =(state, products)=>{

    console.log(state);
    const {category, rating, price, sort} = state;

    let sortedList = [...products];
    console.log("before-sort", sortedList);
    // // sorting the products either in ascending or descending ordeer
    if(sort === "ascending"){
        sortedList.sort((a,b)=> a.price - b.price );
       
    }else if(sort === "descending"){
        sortedList.sort((a,b) => b.price - a.price );
    }
    console.log("after-sort", sortedList);

    // filtering based on rating
    let filteredData = [...sortedList.filter((item)=> item.rating >= rating)];
    console.log("after filtering by rating",filteredData);

    // filter products by category 
    filteredData = category.length ? [...filteredData.filter((item)=> category.includes(item.category))]: [...filteredData];
    console.log("after filtering by category",category);

    // filter products by price
    filteredData = price ? [...filteredData.filter((item)=> item.price < price)]: [...filteredData];
 
    console.log("after filtering by price",filteredData);

    return [...filteredData];
}