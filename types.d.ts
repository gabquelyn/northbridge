type inputHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

type BooleanString = "true" | "false";
interface IApplicationForm {
  canadian: BooleanString;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
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
  pathway: string;
  fatherFirstName: string;
  fatherLastName: string;
  fatherPhoneNumber: string;
  fatherEmail: string;
  fatherDeaceased: BooleanString;
  motherFirstName: string;
  motherLastName: string;
  motherEmail: string;
  motherPhoneNumber: string;
  motherDeaceased: BooleanString;
}

interface SelectOption {
  label: string;
  value: string;
}

interface ApiErrorMessage {
  message: string;
  error: { path: string }[] | string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

type FileHandlerFn = (e: File[], name: string) => void;
type OnDropCallback = (acceptedFiles: File[]) => void;
type Programs = "CAAP" | "GRADE11" | "GRADE12" | "AY12" | "DIRECT";
type Fn = () => void;

interface RegistrationDetails {
  email: string;
  password: string;
  name: string;
}

interface RegisterWithMode extends RegistrationDetails {
  mode?: string | null;
}
interface VerifyCredentials {
  id: string;
  token: string;
}

interface Course {
  id: number;
  shortname: string;
  fullname: string;
  summary: string;
  image?: string;
  category?: number;
}

type LocationData = {
  country: SelectOption | null;
  state: SelectOption | null;
  city: SelectOption | null;
};

type DocumentFile = {
  url: string;
  public_id: string;
  resource_type: string;
  filename: string;
  _id: string;
};

type Application = {
  _id: string;
  mode: "on-site" | "off-site";
  courses: number[];
  programs: Programs[];
  profile: {
    parent?: {
      fatherFirstName: string;
      fatherLastName: string;
      fatherPhoneNumber: string;
      fatherEmail: string;
      fatherDeaceased: boolean;
      motherFirstName: string;
      motherLastName: string;
      motherEmail: string;
      motherPhoneNumber: string;
      motherDeaceased: boolean;
    };
    bio: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      middleName: string;
      gender: string;
      dob: string;
    };
    academics: {
      currentSchool: string;
      pathway: string;
      homeSchool: string;
      secondaryEntry: string;
      completedSecondaryDiploma: boolean;
      qualification: string;
    };
    address: {
      city: string;
      state: string;
      unit: string;
      street: unit;
      country?: string;
    };
    citizenship: {
      canadian: boolean;
      language: string;
      intendToApply: boolean;
      canadianVisa: boolean;
      birthCountry: string;
    };
    documents: {
      transcripts: DocumentFile[];
      govId: DocumentFile[];
      passport: DocumentFile[];
    };
    referrer: string
  };
  granted: boolean;
  paid: boolean;
  completed: boolean;
  createdAt: string;
  outstanding?: number;
  rescinded: boolean
};

interface User {
  name: string;
  email: string;
  role: "user" | "admin";
}
