import { Puppet } from "wechaty-puppet";
import type * as PUPPET from "wechaty-puppet";
export declare enum EventType {
    Message = 0,
    Friendship = 1,
    RoomInvite = 2,
    RoomJoin = 3,
    RoomLeave = 4,
    RoomTopic = 5
}
export interface EventPayloadSpec {
    [EventType.Message]: any;
    [EventType.Friendship]: PUPPET.payloads.Friendship;
    [EventType.RoomInvite]: PUPPET.payloads.RoomInvitation;
    [EventType.RoomJoin]: PUPPET.payloads.EventRoomJoin;
    [EventType.RoomLeave]: PUPPET.payloads.EventRoomLeave;
    [EventType.RoomTopic]: PUPPET.payloads.EventRoomTopic;
}
export interface Event<T extends keyof EventPayloadSpec> {
    type: T;
    payload: EventPayloadSpec[T];
}
export type EventPayload = EventPayloadSpec[keyof EventPayloadSpec] | null;
export type EventParserHandler = (puppet: Puppet, message: any) => Promise<EventPayload>;
export declare function addEventParser(eventType: EventType, parser: EventParserHandler): void;
export declare function parseEvent(puppet: Puppet, message: any): Promise<Event<any>>;
//# sourceMappingURL=event.d.ts.map