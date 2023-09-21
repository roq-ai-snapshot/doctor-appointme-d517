import { MedicalRecordInterface } from 'interfaces/medical-record';
import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  patient_id: string;
  clinic_id: string;
  doctor_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  medical_record?: MedicalRecordInterface[];
  user?: UserInterface;
  clinic?: ClinicInterface;
  healthcare_provider?: HealthcareProviderInterface;
  _count?: {
    medical_record?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  clinic_id?: string;
  doctor_id?: string;
  status?: string;
}
