/// <reference types="node" />
import { EventEmitter } from "events";
type MemberInfo = {
    id: string;
    name: string;
    [key: string]: any;
};
type GroupId = string;
type DeviceId = string;
interface GroupInfo {
    id: GroupId;
    members: Map<string, MemberInfo>;
    [key: string]: any;
}
type MemberChanges = {
    added: MemberInfo[];
    removed: MemberInfo[];
    updated: MemberInfo[];
};
declare class DeviceManager extends EventEmitter {
    private oldDevices;
    private newDevices;
    constructor();
    poll(interval: number): Promise<void>;
    setOldDevices(devices: Map<DeviceId, Map<GroupId, GroupInfo>>): void;
    setNewDevices(devices: Map<DeviceId, Map<GroupId, GroupInfo>>): void;
    private checkAllDevices;
    private hasDeviceChanged;
    private diffMembers;
    private processChanges;
    private notifyChange;
}
export type { MemberInfo, GroupId, DeviceId, GroupInfo, MemberChanges };
export { DeviceManager };
//# sourceMappingURL=diff.d.ts.map