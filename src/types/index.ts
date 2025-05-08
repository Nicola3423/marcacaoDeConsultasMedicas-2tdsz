<<<<<<< HEAD
export { Appointment } from './appointments';
export { Doctor } from './doctors';
export { RootStackParamList } from './navigation';
=======
export type Appointment = {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  description: string;
  status: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  image: string;
};

export type RootStackParamList = {
  Home: undefined;
  CreateAppointment: undefined;
  Profile: undefined;
}; 
>>>>>>> 24ae2a53f3e8b0d07a24c4d09ac84d373e765614
