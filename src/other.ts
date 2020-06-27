export enum Devices {
  Alarmclock = "Alarmclock",
  Watermixer = "Watermixer",
  Gate = "Gate",
  Garage = "Garage",
}
export enum LocalIpAddress {
  Alarmclock = "192.168.1.110",
  Watermixer = "192.168.1.120",
}

export interface TempArray {
  unixTime: number;
  temp: number;
}
