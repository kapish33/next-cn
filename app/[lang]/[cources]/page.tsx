import HeroCources, { cource } from '@/components/common/hero';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  const dummyCources: cource[] = [
    {
      heading: '06:30 am - 08:30 am (Morning)',
      online: true,
      location: 'map:location',
      venue: 'map:venue',
    },
    {
      heading: '04:00 pm - 06:00 pm (Early Evening)',
      online: false,
      location: 'map:location',
      venue: 'map:venue',
    },
    {
      heading: '7:00 pm - 9:00 pm (Evening)',
      online: true,
      location: 'map:location',
      venue: 'map:venue',
    },
  ];

  return (
    <>
      <HeroCources title={'Testing'} cources={dummyCources} />
    </>
  );
}
