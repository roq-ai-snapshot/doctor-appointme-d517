import { AppointmentInterface } from 'interfaces/appointment';
import { MedicalRecordInterface } from 'interfaces/medical-record';
import { ClinicInterface } from 'interfaces/clinic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  name: string;
  specialty: string;
  license_number: string;
  clinic_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  medical_record?: MedicalRecordInterface[];
  clinic?: ClinicInterface;
  user?: UserInterface;
  _count?: {
    appointment?: number;
    medical_record?: number;
  };
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  specialty?: string;
  license_number?: string;
  clinic_id?: string;
  user_id?: string;
}
