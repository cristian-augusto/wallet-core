import { EventEmitter } from "events";

export interface ICustomEvent<T> {
  name: string;
  payload: T;
  timestamp: number;
}

type Handler = { handle: (...args: any[]) => void };

export default class EventManager {
  private static emitter = new EventEmitter();

  static register(eventName: string, handler: Handler) {
    EventManager.emitter.on(eventName, handler.handle);
  }

  static dispatch<T>(customEvent: ICustomEvent<T>) {
    this.emitter.emit(customEvent.name, customEvent);
  }
}
