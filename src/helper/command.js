import uniqueId from '../service/random-id-generator';

export class Command {
    static sourceChanged = uniqueId();
    static articleChanged = uniqueId();
    static sourceInitialize = uniqueId();
    static errorOccurred = uniqueId();
}