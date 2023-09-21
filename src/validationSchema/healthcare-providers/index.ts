import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  specialty: yup.string().required(),
  license_number: yup.string().required(),
  clinic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
