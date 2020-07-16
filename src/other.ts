import {AlarmclockData, alarmclockSampleData} from "./alarmclock";
import {WatermixerData, watermixerSampleData} from "./watermixer";

export interface Devices {
  alarmclock: {
    status: boolean;
    data: AlarmclockData;
    tempArray: TempArray[];
  }
  watermixer: {
    status: boolean;
    data: WatermixerData;
  }
}


const HOURS_IN_DAY = 24;
const tempArray24Hour: TempArray[] = new Array(HOURS_IN_DAY).fill(undefined);
tempArray24Hour.map(
  (_, index): TempArray => {
    return {
      unixTime: new Date(
        new Date().getTime() - 60 * 60 * (index + 1) * 1000,
      ).getTime(),
      temp: 0,
    };
  },
);

export const devicesSample: Devices = {
  alarmclock: {
    status: false,
    data: alarmclockSampleData,
    tempArray: tempArray24Hour,
  },
  watermixer: {
    status: false,
    data: watermixerSampleData,
  }
}

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

