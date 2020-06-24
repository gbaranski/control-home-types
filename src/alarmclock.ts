export interface alarmclockData {
  currentTime: string; // formatted HH/MM/SS
  alarmTime: string; // formatted HH/MM/SS
  remainingTime: string; // formatted HH/MM/SS
  alarmState: number; // 1 or 0
  temperature: number;
  humidity: number;
  heatIndex: number;
}

export interface alarmclockHeaders {
  time: string; // formatted HH/MM/SS
  state: number; // 1 or 0
}
