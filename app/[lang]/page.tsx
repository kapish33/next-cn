import { ProfileForm } from '@/components/custum/UserForm';
import Hero from '@/components/custum/hero';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { universalMetadata } from '@/seo/universal';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return universalMetadata();
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const {
    page: { form },
  }: { page: { form: any } } = await getDictionary(lang);

  return (
    <section>
      {/* <Hero title={page.home.title} description={page.home.description} /> */}
      <div className='max-w-3xl mx-auto p-4'>
      <ProfileForm
        formData={form}
        params={{
          lang,
        }}
      />
    </div>
    </section>
  );
}
