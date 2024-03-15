import { CITY } from "@/lib/city";
import { z } from "zod";

export const selectableOptions = ["Yes", "No"] as const;

export const userForm = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  whatsappNumber: z.string().min(10, {
    message: "WhatsApp number must be at least 10 characters.",
  }),
  area: z.enum(CITY),
  sudarshanKriya: z.enum(selectableOptions),
  sahajSamadhi: z.enum(selectableOptions),
});

export type userFormInterface = z.infer<typeof userForm>;

type UserFormField = keyof userFormInterface;

export type ProfileFormProps = {
  formData: {
    name: {
      fieldName: UserFormField;
      filedLabel: string;
      placeHolder: string;
      filedDescription: string;
    };
    whatsappNumber: {
      fieldName: UserFormField;
      filedLabel: string;
      placeHolder: string;
      filedDescription: string;
    };
    area: {
      fieldName: UserFormField;
      filedLabel: string;
      placeHolder: string;
      filedDescription: string;
    };
    sudarshanKriya: {
      fieldName: UserFormField;
      filedLabel: string;
      placeHolder: string;
      filedDescription: string;
    };
    sahajSamadhi: {
      fieldName: UserFormField;
      filedLabel: string;
      placeHolder: string;
      filedDescription: string;
    };
  };
};
