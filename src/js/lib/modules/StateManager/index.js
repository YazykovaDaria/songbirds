class StateManager {
  constructor() {
    if (StateManager.instance) {
      return StateManager.instance;
    }

    this.state = {};
    this.subscribers = {};
    StateManager.instance = this;
    return this;
  }

  getStateAndSubscribe(key, callback) {
    if (callback) {
      this._addSubscriber(key, callback);
    }
    return this.state[key];
  }

  setState(key, value) {
    this.state[key] = value;
    this._callSubscribers(key, value);
  }

  setInitState = (initState) => {
    this.state = initState;
  };

  _callSubscribers = (key, val) => {
    if (key in this.subscribers) {
      this.subscribers[key].forEach((callback) => {
        callback(val);
      });
    }
  };

  _addSubscriber = (key, callback) => {
    if (key in this.subscribers) {
      this.subscribers[key].push(callback);
    } else {
      this.subscribers[key] = [callback];
    }
  };
}

export default StateManager;
