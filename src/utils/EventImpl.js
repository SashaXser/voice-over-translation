export class EventImpl {
  constructor() {
    this.listeners = new Set();
  }

  addListener(handler) {
    if (this.listeners.has(handler)) {
      throw new Error("[VOT] The listener has already been added.");
    }
    this.listeners.add(handler);
  }

  removeListener(handler) {
    this.listeners.delete(handler);
  }

  dispatch(...args) {
    for (const handler of this.listeners) {
      try {
        handler(...args);
      } catch (exception) {
        console.error("[VOT]", exception);
      }
    }
  }
}
