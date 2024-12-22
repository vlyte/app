import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const uri = 'mongodb+srv://vlytedev:<db_password>@vlyte.y0mpp.mongodb.net/?retryWrites=true&w=majority&appName=Vlyte';
const client = new MongoClient(uri);
const dbName = 'Vlyte';
const collectionName = 'users';

export async function login(email: string, password: string) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const user = await collection.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return { success: true, user };
    } catch (error) {
        console.error('Error logging in:', error);
        return { success: false, error: error.message };
    } finally {
        await client.close();
    }
}