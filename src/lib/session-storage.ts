"use client";

/**
 * Adds a key-value pair to session storage.
 * @param key - The key to store the value under.
 * @param value - The value to store (automatically stringified if it's not a string).
 */
export function addToSessionStorage(key: string, value: unknown): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error("Session storage is not available on the server.");
  }
}

/**
 * Edits an existing value in session storage.
 * If the key does not exist, it creates a new entry.
 * @param key - The key of the value to edit.
 * @param newValue - The new value to set.
 */
export function editSessionStorage(key: string, newValue: unknown): void {
  if (typeof window !== "undefined") {
    if (sessionStorage.getItem(key) !== null) {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    } else {
      console.warn(`Key "${key}" does not exist. Adding it as a new entry.`);
      sessionStorage.setItem(key, JSON.stringify(newValue));
    }
  } else {
    console.error("Session storage is not available on the server.");
  }
}

/**
 * Removes a key-value pair from session storage.
 * @param key - The key to remove.
 */
export function removeFromSessionStorage(key: string): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  } else {
    console.error("Session storage is not available on the server.");
  }
}

/**
 * Retrieves a value from session storage.
 * @param key - The key of the value to retrieve.
 * @returns The parsed value if it exists and is valid JSON, or `null` if not found.
 */
export function getFromSessionStorage<T>(key: string): T | null {
  if (typeof window !== "undefined") {
    const storedValue = sessionStorage.getItem(key);
    try {
      return storedValue ? (JSON.parse(storedValue) as T) : null;
    } catch (error) {
      console.error(`Error parsing value for key "${key}":`, error);
      return null;
    }
  } else {
    console.error("Session storage is not available on the server.");
    return null;
  }
}
