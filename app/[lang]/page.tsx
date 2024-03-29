import Hero from "@/components/custum/hero";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section>
      <Hero title={page.home.title} description={page.home.description} />
    </section>
  );
}