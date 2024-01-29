export interface Location {
  content: string;
  id: 10998878976097;
  title: string;
  opened: true;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: Schedule[]
}

interface Schedule {
  weekdays: string;
  hour: string;
}
