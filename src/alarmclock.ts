export interface alarmclockData {
  currentTime: string; // formatted HH/MM/SS
  alarmTime: string; // formatted HH/MM/SS
  remainingTime: string; // formatted HH/MM/SS
  alarmState: boolean;
  temperature: number;
  humidity: number;
  heatIndex: number;
}

export interface alarmclockHeaders {
  time: string; // formatted HH/MM/SS
  state: boolean;
}
