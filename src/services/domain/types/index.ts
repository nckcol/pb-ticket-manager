import { Action } from 'redux';

interface ADD extends Action<'ticket/ADD'> {}
interface REMOVE extends Action<'ticket/REMOVE'>  {}

export enum TICKET {
    ADD,
    REMOVE
}