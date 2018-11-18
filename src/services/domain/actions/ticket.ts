import { TICKET } from "../types";
import { Ticket, TicketIdentifier } from "../interfaces/Ticket";

// interface Action<Type> {
//     type: Type;
//     error?: boolean;
//     meta?: Object;
//   }

interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
    error?: boolean;
    meta?: Object;
  }

export function add(id: TicketIdentifier, ticket: Ticket): Action<TICKET.ADD, { id: TicketIdentifier, ticket: Ticket }> {
    return {
        type: TICKET.ADD,
        payload: {
            id,
            ticket
        }
    }
}

add({ id: 21, title: 'asdas' });