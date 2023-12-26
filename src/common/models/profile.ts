export interface UserProfile {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  roles: Array<string>;
  company: any;
}
