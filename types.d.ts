type inputHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

interface IApplicationForm {
  canadian: "true" | "false";
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
  street: string;
  unit: string;
  dob: string;
  homeSchool: string;
  currentSchool: string;
  gender: string;
  completedSecondaryDiploma: string;
  secondaryEntry: string;
  qualification: string;
  language: string;
  intendToApply: string;
  canadianVisa: string;
}

interface SelectOption {
  label: string;
  value: string;
}

interface ApiErrorMessage {
  message: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

type FileHandlerFn = (e: File[], name: string) => void;
type OnDropCallback = (acceptedFiles: File[]) => void;
type Programs = "CAAP" | "GRADE11" | "GRADE12" | "AY12";
type Fn = () => void;

interface RegistrationDetails {
  email: string;
  password: string;
  name: string;
}
interface VerifyCredentials {
  id: string;
  token: string;
}
