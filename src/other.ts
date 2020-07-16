export const Devices: string[] = [
  'alarmclock',
  'watermixer',
  'gate',
  'garage',
]
export enum LocalIpAddress {
  Alarmclock = "192.168.1.110",
  Watermixer = "192.168.1.120",
}

export enum AlarmRequestType {
  GET_DATA = "/getESPData",
  GET_TEMP_ARRAY = "/getTempArray",
  GET_DEVICE_STATE = "/isDown",
  SET_TIME = "/setAlarm",
  SWITCH_STATE = "/setAlarmState",
  TEST_ALARM = "/testAlarm",
}
export enum WaterRequestType {
  GET_DATA = "/getESPData",
  START_MIXING = "/startMixing",
}

export interface TempArray {
  unixTime: number;
  temp: number;
}
export interface RequestHistory {
  user: string;
  requestPath: string;
  unixTime: number;
  ip: string;
  userAgent: string;
  country: string;
}

export enum OtherRequestsType {
  GET_DEVICES_STATUS = "/getDevicesStatus",
}

export interface DeviceStatus {
  alarmclock: boolean;
  watermixer: boolean;
  gate: boolean;
  garage: boolean;
}
