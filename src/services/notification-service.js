export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";


let instance = null;

var observers = {};

class NotificationService {
    constructor(){
        if (!instance){
            instance = this;
        }

        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for (var i = 0; i < obs.length; i++) {
            var obj = obs[i];
            obj.callBack(data);
        }
    }

    addObserver = (notifName,observer, callBack) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callBack: callBack}
        observers[notifName].push(obj);
    }

    removeObserver = (observer, notifName) => {
        var obs = observers[notifName];
        if (obs) {
            for (var i=0; i<obs.length; i++) {
                if (observer === obs[i].observer){
                    obs.splice(i,1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }




}

export default NotificationService;