const mapping: Record<string, string> = {
  appointments: 'appointment',
  clinics: 'clinic',
  'healthcare-providers': 'healthcare_provider',
  insurances: 'insurance',
  'medical-records': 'medical_record',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
