import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  treatment_plan: yup.string().required(),
  medical_history: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
