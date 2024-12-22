import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const uri = 'mongodb+srv://vlytedev:<db_password>@vlyte.y0mpp.mongodb.net/?retryWrites=true&w=majority&appName=Vlyte';
const client = new MongoClient(uri);
const dbName = 'Vlyte';
const collectionName = 'users';

export async function signup(email: string, password: string) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await collection.insertOne({ email, password: hashedPassword });

        return { success: true };
    } catch (error) {
        console.error('Error signing up:', error);
        return { success: false, error: error.message };
    } finally {
        await client.close();
    }
}