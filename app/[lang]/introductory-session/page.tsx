import { ProfileForm } from "@/components/custum/UserForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className="max-w-3xl mx-auto">
      <ProfileForm />
    </div>
  );
}
