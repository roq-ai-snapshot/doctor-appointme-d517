interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read healthcare provider information',
    'Read appointment details',
    'Read insurance details',
  ],
  ownerAbilities: ['Manage user data', 'Manage clinic data', 'Manage appointment data', 'Manage insurance data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bcf76266-ea6e-41d7-b3c3-3598992341bf',
};
