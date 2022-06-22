import { v4 as uuidv4 } from 'uuid';

export const getId = (): string => uuidv4();
export const getTimestamp = (): number => Date.now();
