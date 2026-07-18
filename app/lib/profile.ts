import { api } from "./api";
export const getprofile = async () => {
  const res = await api.get("/profile/user");
  return res.data;
};

export const consultation = async (details: Record<string, string>) => {
  const res = await api.post("/consultation", {
    ...details,
  });
  return res.data;
};

export const create = async () => {
  const res = await api.post("/profile");
  return res.data;
};

export const contact = async ({
  details,
  profileId,
}: {
  details: {
    gender: string;
    dob: string;
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    email: string;
  };
  profileId?: string;
}) => {
  const res = await api.patch(`/profile/contact/${profileId}`, details);
  return res.data;
};

export const profile = async (profileId: string) => {
  const res = await api.get(`/profile/${profileId}`);
  return res.data;
};

export const mailing = async ({
  details,
  profileId,
}: {
  details: {
    street: string;
    city: string;
    unit: string;
    state: string;
    country: string;
  };
  profileId?: string;
}) => {
  const res = await api.patch(`/profile/mailing/${profileId}`, details);
  return res.data;
};

export const academic = async ({
  details,
  profileId,
}: {
  details: Record<string, string>;
  profileId?: string;
}) => {
  const res = await api.patch(`/profile/academic/${profileId}`, details);
  return res.data;
};

export const citizenship = async ({
  details,
  profileId,
}: {
  details: {
    canadian: string;
    language: string;
    canadianVisa: string;
    birthCountry: string;
    intendToApply: string;
  };
  profileId?: string;
}) => {
  const res = await api.patch(`/profile/citizenship/${profileId}`, details);
  return res.data;
};

export const mode = async ({
  details,
  applicationId,
}: {
  details: {
    mode: string;
  };
  applicationId?: string;
}) => {
  const res = await api.patch(`/profile/mode/${applicationId}`, details);
  return res.data;
};

export const programs = async ({
  details,
  applicationId,
}: {
  details: {
    programs: string[];
  };
  applicationId?: string;
}) => {
  const res = await api.patch(`/profile/programs/${applicationId}`, details);
  return res.data;
};

export const incomplete = async () => {
  const res = await api.get(`/profile/incomplete`);
  return res.data;
};

export const courses = async ({
  details,
  applicationId,
}: {
  details: {
    courses: number[];
  };
  applicationId?: string;
}) => {
  const res = await api.patch(`/profile/courses/${applicationId}`, details);
  return res.data;
};

export const parent = async ({
  details,
  profileId,
}: {
  details: {
    fatherFirstName: string;
    fatherLastName: string;
    fatherPhoneNumber: string;
    fatherEmail: string;
    fatherDeaceased: string;
    motherFirstName: string;
    motherLastName: string;
    motherEmail: string;
    motherPhoneNumber: string;
    motherDeaceased: string;
  };
  profileId?: string;
}) => {
  const res = await api.patch(`/profile/parent/${profileId}`, details);
  return res.data;
};

export const document = async ({
  details,
  profileId,
}: {
  details: { form: FormData };
  profileId?: string;
}) => {
  const form = details.form;
  const res = await api.patch(`/profile/documents/${profileId}`, form);
  return res.data;
};
