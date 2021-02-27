
let instance = null;
var wishList = [];

class DataService {
    constructor(){
        if(!instance){
            instance = this;
        }
        
        return instance;
    }

    addWishListItem = item => {
        wishList.push(item);
    }

    removeWishListItem = item => {
        for (var i=0; i<wishList.length; i++){
            if (wishList[i]._id === item._id) {
                wishList.splice(i,1);
                break;
            }
        }
    }
}

export default DataService;