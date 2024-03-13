import Headers from '@/components/common/Header/headers';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section>
      <Headers />
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-gray-500'>{page.home.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolore
          asperiores atque quam earum! Cumque excepturi rerum itaque asperiores
          nam temporibus assumenda ipsa delectus. Error qui mollitia dolorem.
          Deleniti, quo impedit itaque vero odio reiciendis libero praesentium
          labore quas nostrum blanditiis voluptates maiores veniam eius unde
          porro tempora architecto id repellendus fugiat molestias quisquam
          quis? Debitis, excepturi odio suscipit ex recusandae harum nesciunt
          consectetur impedit itaque tenetur ullam, doloribus autem reiciendis
          rerum iste quae laboriosam doloremque aliquam! Aspernatur distinctio
          praesentium similique tempore laboriosam odit excepturi, voluptas
          veritatis natus rerum quas. Neque quasi nostrum repellat facere
          voluptas numquam, autem corrupti reiciendis saepe ad, exercitationem
          maxime rerum, ea et culpa nisi assumenda hic. Beatae id ratione nobis
          sint, architecto earum maxime voluptatum et! Laborum ipsa, veritatis
          cupiditate ipsum voluptatum perspiciatis voluptas iure provident
          assumenda incidunt est explicabo recusandae sunt, cumque voluptatibus
          quo, nemo vitae aut blanditiis porro aperiam quae deleniti. Magnam
          nostrum explicabo corrupti ipsam repellendus mollitia perspiciatis,
          suscipit doloribus quos totam quasi, earum quam sapiente fugit, unde
          voluptatem voluptatum eligendi minus debitis ducimus exercitationem
          maxime odio quibusdam? Dignissimos itaque repudiandae assumenda iure,
          sint nihil cupiditate nulla soluta quam totam deleniti in consectetur!
          Aspernatur at vel aut numquam qui voluptatem rerum obcaecati impedit
          hic repellendus reiciendis doloribus ex, sint quidem commodi facere
          culpa assumenda eius itaque? Expedita fugiat quam nobis minima totam
          exercitationem neque. Ullam quod cupiditate quibusdam magni doloremque
          repudiandae saepe neque. Voluptatem qui explicabo officia! Id
          laboriosam odit ratione rem doloribus ab illum repellat, eligendi
          cupiditate consequatur officiis temporibus qui illo impedit aliquid
          mollitia in sequi consectetur iure dolore. Voluptatum qui culpa nemo
          quia quae iusto commodi accusantium eos sint aspernatur corporis aut
          maxime esse, inventore reiciendis. Nostrum perspiciatis ratione dolor
          voluptas quibusdam veritatis, cumque, perferendis itaque nisi pariatur
          laudantium obcaecati autem ab asperiores modi officia repellendus ex!
          Numquam unde excepturi, debitis, consectetur commodi ab officia
          praesentium placeat nostrum tempore eveniet ipsa deserunt repellat
          earum ipsam consequuntur natus facilis asperiores molestiae at
          architecto. Impedit perspiciatis, aperiam reiciendis cumque asperiores
          autem, quis aut harum eaque mollitia deleniti pariatur delectus
          dignissimos est ut deserunt dicta quae, in explicabo neque tenetur!
          Voluptate atque beatae neque. Quam nostrum ex eos voluptatibus, ea
          perferendis ratione quia fugiat! Dolores nam quibusdam nobis vero
          porro corporis delectus quas eligendi saepe minus, harum cupiditate
          molestias eum iure ducimus? Provident libero illum dignissimos modi
          debitis, neque maiores quae repellat exercitationem porro cupiditate
          ducimus tenetur possimus ab dolore animi reprehenderit beatae saepe
          harum voluptatum accusamus accusantium voluptate esse? Vero facilis
          autem eaque voluptate quibusdam ipsa eius odit in veniam doloremque
          ipsum dignissimos esse at est error similique soluta voluptatem
          placeat commodi excepturi, sint incidunt molestiae. Itaque voluptatum
          tempora exercitationem quos voluptas ipsa neque voluptates? Sed
          veritatis commodi quisquam vero quas eveniet voluptate dolore quaerat?
          Ipsam consequatur ducimus minima dolore repellendus suscipit, est illo
          nesciunt fuga cupiditate quidem quae delectus, quo sed quis distinctio
          omnis. Voluptatem, voluptas alias porro eum debitis esse doloribus
          ipsam, expedita tempora vel ea dolores deleniti nobis deserunt. Rerum,
          necessitatibus. Fuga id sit odio accusantium suscipit ipsam quia
          architecto excepturi. Explicabo ullam dolorem earum voluptates
          inventore veritatis omnis rem ratione, vero sit, doloremque neque,
          eligendi suscipit? Iste minus nostrum ea et debitis quidem totam quod
          delectus eveniet consequatur veniam modi voluptas, eos eligendi a
          asperiores pariatur alias harum at perspiciatis explicabo tempore
          numquam nulla. Repellat molestias praesentium expedita quasi nesciunt
          tenetur nihil deserunt reprehenderit culpa voluptatem quia assumenda
          nam, laborum beatae aliquam aliquid id perferendis recusandae!
          Suscipit eaque asperiores earum impedit a et quae! Consectetur ad
          minus voluptate voluptatibus ipsum natus quis vero. Id, consequuntur
          odio iure ipsum atque reiciendis distinctio, facere ut, eum iusto
          repellat blanditiis! Atque, dolor facilis voluptatum quo provident
          perspiciatis? Corporis, accusamus quibusdam, esse quas rem modi
          asperiores sit ea aperiam nam officia ut architecto corrupti
          repellendus. Inventore animi minus facere assumenda modi excepturi
          optio deleniti veritatis corporis ipsum. Voluptatibus ad minus,
          nesciunt sint voluptatem ex blanditiis distinctio impedit quae quasi
          aspernatur animi sit vero corporis alias vel possimus perferendis quis
          inventore eius deleniti voluptas optio sapiente perspiciatis!
          Temporibus optio, doloribus in ea libero assumenda nulla voluptatibus
          impedit et dolor aliquid necessitatibus vitae corporis voluptas maxime
          fugiat sapiente! Tempore quo ipsam numquam pariatur in earum eveniet
          placeat consequuntur quas, saepe maiores ab, ipsa similique
          voluptatibus a porro, totam culpa fuga. Aperiam sunt ullam, aliquid
          quod laboriosam at cum! Iste ducimus temporibus sunt molestiae qui
          veniam sed maiores laudantium beatae? Pariatur enim reprehenderit
          temporibus sapiente est non quos dolorum et, eum inventore mollitia
          vel nobis atque corporis repudiandae, doloremque, odio quibusdam fuga
          laudantium maiores? Molestiae numquam asperiores tempore rerum ex
          soluta quo, modi excepturi, natus in officiis blanditiis reiciendis
          voluptatibus veniam nemo sunt sequi impedit, ipsa incidunt! Corporis
          libero mollitia culpa molestias voluptatum non est rerum iure?
          Eligendi aliquid, earum reprehenderit totam quidem libero illo ipsum
          voluptate inventore deserunt itaque aperiam ratione accusantium
          officia, alias natus ipsa quisquam repudiandae nulla, molestiae odio
          impedit? Sint temporibus nam aliquid repudiandae, delectus, eos iusto
          nostrum provident culpa repellendus animi totam dicta harum neque
          minima maxime modi voluptates, quidem eaque. Laboriosam aperiam quos
          illum quod esse delectus quibusdam ipsam beatae enim est alias
          blanditiis, amet molestiae asperiores commodi sunt eligendi dolorem,
          natus vel ratione, ex labore placeat quisquam error. Quis
          perspiciatis, in doloribus id saepe ducimus sit aliquam maiores non!
          Soluta, consequuntur sed earum deserunt, ea hic at, fugit dolorum
          asperiores voluptatibus rerum cupiditate blanditiis nam eius iste vel
          quo nihil ut ipsum! Sed expedita quae rem deserunt. Error, quisquam
          voluptatem. Voluptas commodi deleniti eos nostrum vitae numquam magnam
          officiis! Similique doloremque assumenda voluptatem provident sit
          aliquid ea, suscipit, voluptas, numquam eveniet amet quos quae nostrum
          ab eaque inventore iure sint ut debitis explicabo exercitationem nihil
          esse adipisci? Excepturi nostrum, nisi enim sapiente necessitatibus
          modi ex quidem minima ab inventore saepe tempore ipsum provident vel
          facilis itaque commodi est tenetur quasi maxime animi veritatis. Vero
          esse ducimus magni quia veniam, placeat impedit sint, qui deserunt
          laboriosam eius veritatis natus voluptates cupiditate distinctio
          necessitatibus quis molestias sapiente rem magnam omnis quaerat fuga.
          Minus maiores, vitae ipsa cumque enim consequuntur deserunt modi
          dolore voluptatibus aliquid atque suscipit velit ratione incidunt
          dignissimos officiis possimus rem repudiandae sunt amet! Deleniti
          laborum libero ab doloribus ratione officia ipsum iste nisi
          voluptatibus, debitis deserunt unde, numquam explicabo tenetur
          necessitatibus fuga rem earum consequuntur suscipit laudantium.
          Consectetur ipsa porro animi unde quisquam expedita labore cupiditate
          praesentium similique explicabo sunt, hic obcaecati officia fuga amet
          soluta culpa assumenda ea fugiat recusandae voluptatibus aspernatur
          nemo dolore vero! Aspernatur itaque, fugit suscipit veritatis
          perspiciatis quia sunt sapiente nihil vero nulla rem fugiat ipsam
          beatae laborum enim labore esse quisquam recusandae quis. Odit eius
          possimus quos minima quam hic. Deserunt, quisquam! Reprehenderit illo
          veniam assumenda fugit? Esse dolorum assumenda corporis tempora
          voluptatem architecto dolore error eos tenetur officiis similique
          quasi, illo, unde inventore ab, doloremque excepturi ipsum. Similique
          iusto, aspernatur harum ipsum nesciunt perspiciatis placeat alias!
          Voluptatibus earum tempore optio magnam debitis esse dolor amet nihil,
          nesciunt modi, obcaecati hic similique, qui distinctio doloremque?
          Reprehenderit ipsum, libero eos soluta quo accusantium, minima,
          reiciendis quidem fugiat ea rem perspiciatis enim vel nihil porro
          harum! Iste ipsa corporis natus deserunt error quos est minima
          possimus eaque? Tempora quibusdam, accusantium sapiente consequatur
          blanditiis laborum ex reprehenderit eaque quasi officia dicta nostrum.
          Nulla porro reprehenderit voluptate quaerat recusandae commodi numquam
          ut aspernatur veniam nisi fugit voluptas, neque aut tenetur sunt velit
          nostrum amet saepe soluta obcaecati distinctio similique iure eligendi
          expedita. At, fuga eaque illo corrupti exercitationem quo quis
          expedita! Eius ullam officiis quisquam odit repudiandae. Praesentium
          eveniet alias voluptatibus vitae doloremque, eaque nam quam natus.
          Voluptatum, beatae at doloremque consequatur tempore officia quos
          dolorem sapiente odit error? Vel, sit! Placeat debitis ratione unde
          expedita possimus ullam sed sit sunt? Voluptatum blanditiis excepturi
          mollitia possimus, repellat officia deleniti architecto, beatae odit
          ipsum nobis modi sit. Sint vitae odio dolor itaque quos pariatur
          commodi saepe? Non aliquam a, perferendis eaque accusamus illum?
          Provident nobis quis reprehenderit unde voluptas repellat, impedit,
          natus, ad animi accusantium eveniet quos facere ea optio vitae
          corrupti corporis sapiente pariatur rem aut quam placeat quo error.
          Cupiditate nam dolore incidunt at laudantium reiciendis nisi dicta
          amet vel eaque labore unde, facere necessitatibus natus ducimus
          repellendus fuga dolorum minima mollitia obcaecati suscipit inventore
          deleniti pariatur! Architecto ipsa numquam ut sunt corrupti, commodi
          eveniet est consequatur explicabo asperiores exercitationem animi,
          laborum tenetur possimus esse aperiam laudantium illo! Eaque veritatis
          dolore cumque totam praesentium facere debitis reiciendis omnis, qui
          nesciunt non, itaque deserunt, adipisci ipsa at. Facilis debitis
          aperiam aliquam placeat illum! Inventore blanditiis eos neque
          laboriosam culpa explicabo beatae, adipisci corporis tenetur officia
          odit molestiae, nesciunt libero itaque possimus nam et eveniet quidem
          quis ipsa vero officiis fugiat amet? Modi soluta iure tempora placeat
          qui harum eligendi doloremque inventore neque fugiat tempore quae
          eveniet nobis, nostrum dignissimos, libero, consequatur atque aliquam
          veniam quo consectetur quas quos! Accusamus similique, ipsum earum
          voluptatem voluptatibus sed sint a exercitationem voluptate atque,
          facere quod, dignissimos perspiciatis veritatis error deserunt
          provident corporis architecto nostrum laudantium veniam aperiam
          aspernatur rerum fugit. Aperiam magni natus optio deserunt ex tenetur
          quidem itaque. Odio obcaecati impedit quibusdam aperiam recusandae est
          ipsam, dolore magnam molestiae nesciunt in aliquam illo quam
          reiciendis pariatur culpa placeat aspernatur voluptatem nam officia
          magni. Deleniti distinctio necessitatibus, sapiente dolorem dolorum
          natus atque illum officiis similique, ipsam aspernatur! Harum,
          doloribus laudantium. Voluptate deleniti corporis nesciunt, nemo
          dolorum ratione laboriosam distinctio est natus, sequi odit tempora.
          Voluptatum iure maxime quaerat aliquam perspiciatis dolorum doloremque
          laborum earum expedita, natus autem fugiat, animi consequatur suscipit
          accusamus eos dolorem, molestias minus placeat quibusdam similique
          inventore. Cumque nihil perferendis harum error praesentium unde illo
          dolor, quo ratione vitae facilis reprehenderit iure natus magnam
          similique iusto enim laboriosam ex labore sed accusamus exercitationem
          tenetur! Voluptatum laboriosam dolor mollitia aut totam ratione harum,
          vel fuga unde sit adipisci architecto qui. Ipsam, fugit, voluptatum
          corporis quo provident doloribus itaque tempore, maiores numquam nulla
          repellendus sint rem. Reiciendis iste corrupti sequi! Nostrum rem
          officia ab quo commodi sapiente dolorem deleniti reprehenderit ullam
          quis! Ad ullam corrupti ipsum necessitatibus iure, quis soluta nobis
          porro possimus sint dolores quae debitis quam molestiae cumque
          blanditiis, consectetur ex aut similique vel dignissimos impedit?
          Incidunt unde quae a harum beatae provident quod est assumenda et
          tempore consectetur, quo illo velit eos, voluptates commodi fugit.
          Ipsum rem quos sapiente officia ea quas reprehenderit quam at
          nesciunt. Maxime vitae harum tempore, debitis voluptate ipsa unde
          totam est. Qui esse adipisci, eum debitis excepturi dolorem tempora
          veritatis aliquid ullam. Similique ullam vel fugit incidunt sed
          laboriosam voluptas odit molestias beatae corporis aut quidem
          accusantium atque saepe quos ducimus excepturi sunt eum error quis,
          mollitia modi nulla tempora doloremque! Iure corporis modi porro
          consectetur sequi asperiores placeat veritatis atque maiores, animi
          nihil eum quibusdam sed eos repudiandae minima in quos dignissimos
          reprehenderit ratione. Cum optio nisi, illo officiis a tempore quasi
          facere molestias impedit dolores, quibusdam possimus. Esse adipisci,
          sit vel ipsam perspiciatis aspernatur, rerum necessitatibus quaerat
          maiores totam debitis nisi? Tempore, id? Fuga, et quos. Soluta
          doloremque corrupti aliquam! Ipsa maiores ipsam qui quam nihil,
          explicabo perferendis cumque, facilis aliquid eius totam quae, eum
          mollitia debitis dolorum odit ullam recusandae eos hic corporis veniam
          eaque. Dolor quas corporis molestiae qui ipsum earum accusantium
          deserunt obcaecati magnam dignissimos doloribus laboriosam, tempore
          est magni architecto a eaque commodi, quo assumenda rem. Minima
          numquam totam et distinctio modi autem. Magnam fuga in laborum tenetur
          ex soluta voluptatum, necessitatibus eos laboriosam atque adipisci,
          temporibus ducimus dignissimos officiis illo officia suscipit illum.
          Ullam, voluptates. Minus magni hic iusto rerum at quisquam quo ipsa,
          obcaecati totam, neque reprehenderit illum! Dolore odit illum ea
          deleniti animi molestiae hic maxime nostrum fugit, molestias eveniet
          veniam et sint nam amet ipsam adipisci. Aut molestiae accusantium
          eveniet corporis quisquam mollitia veritatis id enim. Amet quae
          perferendis necessitatibus voluptate adipisci, magnam dolore molestias
          quos saepe nisi, reprehenderit harum non fuga. Non aut ut dolore
          minus. Accusamus aliquam aspernatur sunt placeat maiores sequi nulla
          odit, exercitationem dicta, culpa harum, fugit sit hic? Eius est
          officia rem. Molestias a vero voluptatibus quaerat ducimus quae
          reiciendis explicabo itaque accusantium.
        </p>
      </div>
    </section>
  );
}
