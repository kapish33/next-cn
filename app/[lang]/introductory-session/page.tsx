import { ProfileForm } from "@/components/custum/UserForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { ProfileFormProps } from "@/schema";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    page: { form },
  }: { page: { form: any } } = await getDictionary(lang);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ProfileForm formData={form} />
    </div>
  );
}
