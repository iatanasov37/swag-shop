import NotificationService, {NOTIF_WISHLIST_CHANGED} from "./notification-service";

let ns = new NotificationService();

let instance = null;
var wishList = [];

class DataService {
    constructor(){
        if(!instance){
            instance = this;
        }
        
        return instance;
    }

    itemOnWishList = item => {
        for (var i=0; i<wishList.length; i++){
            if (wishList[i]._id === item._id) {
                return true;
            }
        }
        return false;
        
    }

    addWishListItem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList);
    }

    removeWishListItem = item => {
        for (var i=0; i<wishList.length; i++){
            if (wishList[i]._id === item._id) {
                wishList.splice(i,1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList);
                break;
            }
        }
    }
}

export default DataService;