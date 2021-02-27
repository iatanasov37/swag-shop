
let instance = null;

var observers = {};

class NotificationService {
    constructor(){
        if (!instance){
            instance = this;
        }

        return instance;
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

    addObserver = (notifName,observer, callBack) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callBack: callBack}
        observers[notifName].push(obj);
    }


}