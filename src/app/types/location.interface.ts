export interface Lotation {
  id: 10998878976097;
  title: string;
  content: string;
  opened: true;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: Schedule[];
}

interface Schedule {
  weekdays: string;
  hour: string;
}
