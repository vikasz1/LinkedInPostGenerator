// Storage interface for the LinkedIn Post Generator
// Currently no persistent data storage needed for this application

export interface IStorage {
  // Add any CRUD methods if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize in-memory storage if needed
  }
}

export const storage = new MemStorage();
