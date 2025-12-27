import { data } from "react-router";
import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT as string,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID as string,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY as string,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID as string,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID as string,
    tripCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID as string
};

const client = new Client().setEndpoint(appwriteConfig.endpointUrl).setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };
