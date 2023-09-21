import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMedicalRecord } from 'apiSdk/medical-records';
import { medicalRecordValidationSchema } from 'validationSchema/medical-records';
import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { AppointmentInterface } from 'interfaces/appointment';
import { getUsers } from 'apiSdk/users';
import { getHealthcareProviders } from 'apiSdk/healthcare-providers';
import { getAppointments } from 'apiSdk/appointments';
import { MedicalRecordInterface } from 'interfaces/medical-record';

function MedicalRecordCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MedicalRecordInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMedicalRecord(values);
      resetForm();
      router.push('/medical-records');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MedicalRecordInterface>({
    initialValues: {
      diagnosis: '',
      treatment_plan: '',
      medical_history: '',
      patient_id: (router.query.patient_id as string) ?? null,
      doctor_id: (router.query.doctor_id as string) ?? null,
      appointment_id: (router.query.appointment_id as string) ?? null,
    },
    validationSchema: medicalRecordValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Medical Records',
              link: '/medical-records',
            },
            {
              label: 'Create Medical Record',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Medical Record
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.diagnosis}
            label={'Diagnosis'}
            props={{
              name: 'diagnosis',
              placeholder: 'Diagnosis',
              value: formik.values?.diagnosis,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.treatment_plan}
            label={'Treatment Plan'}
            props={{
              name: 'treatment_plan',
              placeholder: 'Treatment Plan',
              value: formik.values?.treatment_plan,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.medical_history}
            label={'Medical History'}
            props={{
              name: 'medical_history',
              placeholder: 'Medical History',
              value: formik.values?.medical_history,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'patient_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<HealthcareProviderInterface>
            formik={formik}
            name={'doctor_id'}
            label={'Select Healthcare Provider'}
            placeholder={'Select Healthcare Provider'}
            fetcher={getHealthcareProviders}
            labelField={'name'}
          />
          <AsyncSelect<AppointmentInterface>
            formik={formik}
            name={'appointment_id'}
            label={'Select Appointment'}
            placeholder={'Select Appointment'}
            fetcher={getAppointments}
            labelField={'status'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/medical-records')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'medical_record',
    operation: AccessOperationEnum.CREATE,
  }),
)(MedicalRecordCreatePage);
