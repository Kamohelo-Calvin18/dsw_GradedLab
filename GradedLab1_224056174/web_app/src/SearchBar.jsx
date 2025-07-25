
function SearchBar(props){
    function handleUserInput(event) {
        props.setuserSearchItem(event.target.value);
    }

    function handleCategoryChoice(event) {
        props.setCategory(event.target.value);
    }

    function handleInStockChecker(event) {
        props.SetInStock(event.target.checked);
    }


    return(
        <div className="search-bar">
            <label><b>Input item:</b></label>
            <input placeholder="type input here" value={props.userQuery} onChange={handleUserInput}></input>

            <form>
                <select value={props.userCategory} onChange={handleCategoryChoice}>
                    <option value="All">All</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Furniture">Furniture</option>
                </select>
            </form> 

            <label>
                <b>In store:</b>
                <input type="checkbox" checked={props.inStock} onChange={handleInStockChecker}></input>
            </label>
            

        </div>
        
    )

}

export default SearchBar