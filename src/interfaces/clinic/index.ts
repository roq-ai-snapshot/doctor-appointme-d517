import { AppointmentInterface } from 'interfaces/appointment';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { InsuranceInterface } from 'interfaces/insurance';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  healthcare_provider?: HealthcareProviderInterface[];
  insurance?: InsuranceInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    healthcare_provider?: number;
    insurance?: number;
  };
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
