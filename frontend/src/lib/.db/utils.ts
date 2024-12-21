import { MongoClient, ServerApiVersion } from 'mongodb';

class MongoDB {
	constructor(
		public uri: any = process.env.MONGO_URI,
		public client: any = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true
			}
		})
	) {
		this.uri = uri;
		// Create a MongoClient with a MongoClientOptions object to set the Stable API version
		this.client = client;
	}
	async connectToMongo(collectionforConnection: string = 'users') {
		try {
			const collection = this.client.db().collection(collectionforConnection);
		} catch (error) {
			throw new Error(error);
		}
	}

	async disconnectFromMongo() {
		try {
			await this.client.close();
		} catch (error) {
			throw new Error(error);
		}
	}

	async insertData(collection: any, dataDocument: {}) {
		try {
			await this.client.db().collection(collection).insertOne(dataDocument);
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateData(collection: any, dataDocument: {}) {
		try {
			await this.client.db().collection(collection).updateOne(dataDocument);
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteData(collection: any, dataDocument: {}) {
		try {
			await this.client.db().collection(collection).deleteOne(dataDocument);
		} catch (error) {
			throw new Error(error);
		}
	}

	async findData(collection: any, dataDocument: {}) {
		try {
			const find = await this.client.db().collection(collection).findOne();
			return find;
		} catch (error) {
			throw new Error(error);
		}
	}

	async dropDatabase(databaseToDrop: string) {
		try {
			await this.client.db().dropDatabase(databaseToDrop);
		} catch (error) {
			throw new Error(error);
		}
	}

	async wipeAll() {
		try {
			await this.client.db().deleteMany({});
		} catch (error) {
			throw new Error(error);
		}
	}
}

const db_utils = new MongoDB();
export default db_utils;
