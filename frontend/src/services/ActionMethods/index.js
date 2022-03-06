class ActionMethods {
    methods = {}

    /**
     * Getting dispatch and methodList, then adding them to methods property
     */
    constructor(dispatch, methodList){
        if(!dispatch && !methodList) { return; }

        this.dispatch = dispatch;
        this.addAll(methodList);
    }

    // add a single action method
    add(name, callbackFunction) {
        this.methods[name] = callbackFunction.bind(this, this.dispatch)
    }

    // add all action method from an object
    addAll(object) {
        for (const [name, callbackFunction] of Object.entries(object)) {
            this.add(name, callbackFunction)
        }
    }
}

export default ActionMethods;
