import { Action } from 'redux';
import { Ticket, TicketIdentifier } from '../interfaces/Ticket';

function ticket(state: Ticket, action: Action): Ticket {
    return state;
}


interface TicketRecord extends Record<TicketIdentifier, Ticket> {};

export default function(state: TicketRecord = {}, action: Action): TicketRecord {
    return state;
}