export interface ScheduleItem {
  id: string;
  teacherId: string;
  startDate: string;
  day: string;
  time: {
    start: {
      value: string;
      meridian: string;
    },
    end: {
      value: string;
      meridian: string;
    },
  },
}

export interface LoginProps {
  navigation: any;
}

export interface ErrorState {
  email?: string;
  password?: string;
}