import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface MedicalRecordInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  diagnosis: string;
  treatment_plan: string;
  medical_history: string;
  appointment_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  healthcare_provider?: HealthcareProviderInterface;
  appointment?: AppointmentInterface;
  _count?: {};
}

export interface MedicalRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  diagnosis?: string;
  treatment_plan?: string;
  medical_history?: string;
  appointment_id?: string;
}
