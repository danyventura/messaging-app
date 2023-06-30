import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '649c51fcf17270543706';
export const DATABASE_ID = '649c5ba46c6f438ff952';
export const COLLECTION_ID_MESSAGES = '649c5bb8ebc209b20c21';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('649c51fcf17270543706');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
