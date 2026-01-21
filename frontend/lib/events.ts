// Event emitter for handling custom events across the application
type EventCallback = (...args: any[]) => void;

class EventEmitter {
  private events: Map<string, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  /**
   * Subscribe to an event
   */
  on(event: string, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    const callbacks = this.events.get(event)!;
    callbacks.push(callback);

    // Return unsubscribe function
    return () => {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  /**
   * Emit an event with data
   */
  emit(event: string, ...args: any[]): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => {
        try {
          callback(...args);
        } catch (error) {
          console.error(`Error in event handler for "${event}":`, error);
        }
      });
    }
  }

  /**
   * Remove all listeners for an event
   */
  off(event: string): void {
    this.events.delete(event);
  }

  /**
   * Subscribe to an event that will only fire once
   */
  once(event: string, callback: EventCallback): void {
    const onceCallback = (...args: any[]) => {
      callback(...args);
      this.off(event);
    };
    this.on(event, onceCallback);
  }
}

// Export singleton instance
export const eventEmitter = new EventEmitter();

// Common event types
export const Events = {
  PRODUCT_ADDED_TO_CART: 'product:added-to-cart',
  PRODUCT_REMOVED_FROM_CART: 'product:removed-from-cart',
  USER_LOGGED_IN: 'user:logged-in',
  USER_LOGGED_OUT: 'user:logged-out',
  CART_UPDATED: 'cart:updated',
} as const;

// Example usage:
// eventEmitter.on(Events.PRODUCT_ADDED_TO_CART, (product) => {
//   console.log('Product added:', product);
// });
//
// eventEmitter.emit(Events.PRODUCT_ADDED_TO_CART, { id: '1', name: 'Product' });
