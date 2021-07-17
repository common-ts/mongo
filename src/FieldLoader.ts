import {Collection, Db} from 'mongodb';
import {getFields} from './mongo';

export class FieldLoader {
  protected collection: Collection;
  constructor(db: Db, collectionName: string, public field: string) {
    this.collection = db.collection(collectionName);
    this.values = this.values.bind(this);
  }
  values(ids: string[]): Promise<string[]> {
    return getFields<string>(this.collection, name, ids);
  }
}