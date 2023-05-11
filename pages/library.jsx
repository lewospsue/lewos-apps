import Head from 'next/head';
import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
const bag2 = "https://c4.wallpaperflare.com/wallpaper/384/613/223/raphael-athens-philosophy-arch-wallpaper-preview.jpg"
const logophoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/P_philosophy.svg/625px-P_philosophy.svg.png'

export const metadata = {
  title: 'Felsefe Quiz',
  description: 'dev by kawa media',
}

const library = () => {
  return (
    <div>
      <Head>
        <title>Felsefe Quiz</title>
        <meta title='Felsefe Quiz'/>
        <link rel='icon'/>
      </Head>
      <main className='bg-gradient-to-tl from-black via-slate-950 to-indigo-950 px-5 w-full'>
        <section className='min-h-screen w-full items-center'>
          <nav className='py-5 mb-12 flex justify-between items-center align-middle h-20 w-full'>
            <div className='flex items-center justify-between'>
              <img src={logophoto} alt='Logo' className='px-5 h-10' />
              <h1 className='font-burtons text-2xl'>Made by. LIBEB</h1>
            </div>
            
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li className='bg-gradient-to-tl from-slate-900 to-indigo-800 text-white px-4 py-2 rounded-md ml-8'><a href='/'>Anasayfa</a></li>
            </ul>
          </nav>

          <div className='h-auto font-mono text-gray-300 w-full p-5 rounded-md m-2 mt-10 bg-slate-950/20 text-center items-center justify-center border-gray-700/30 border-2'>
            <p className='text-3xl font-extrabold pb-6 pt-4'>DÜŞÜNÜRLER BÖLÜMÜ</p>
            <p>
              Bir sürü kanunlar yapıp bunları değiştirmekle ömür geçirirler, sonunda en iyisini bulacağız diye.<br/>
              <span className='text-gray-600'>Devlet, Platon</span>
            </p>

            <div className='h-auto grid grid-cols-4 grid-rows-3 align-middle gap-4 my-7 justify-center'>
                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Konfüçyüs</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Konfüçyüs ya da Kongzi, Çinli filozof, eğitimci ve yazar. M.Ö. 551 - M.Ö. 479 tarihleri arasında, Doğu Zhou Hanedanlığı döneminde yaşadığı sanılmaktadır. Kong Qiu adı altında, Lu devletinin Qufu şehrinde doğmuş ve aynı şehirde ölmüştür. Çin uygarlığının en önemli temsilcilerinden biri kabul edilir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Thales</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Miletli Thales, Milet, İyonya'dan bir Antik Yunan matematikçi, astronom ve Sokrat öncesi filozoftu. İlk filozoflardan olduğu için felsefenin ve bilimin öncüsü olarak adlandırılır. İyonya Aydınlanmasının başlatıcısı olarak bilinir ve Eski Yunan'ın Yedi Bilge'sinden ilkidir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 :border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Heraklitos</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Efesli Heraklitos, Efes'te yaşamış Sokrates öncesi Yunan filozof. Efes'in yerlisi olduğu ve babasının adının Bloson olduğu gibi detaylar dışında hayatı hakkında pek az şey bilinmektedir. Batı felsefe tarihinde dinamik bir felsefi sistem ortaya koyan ilk kişidir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Karl Marx</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Karl Marx, 19. yüzyılda yaşamış Alman filozof, politik ekonomist ve bilimsel sosyalizmin kurucusu. Bir müddet gazetecilik de yapan Marx, iktisadi ve beşerî konularda eleştirel fikirler ve tespitler ortaya koymuştur.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">İbn-i Sina</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Tıp adamı, yazar, filozof ve bilim insanı olan İbn-i Sina'ya göre metafiziğin temel konusu, 'vücudu mutlak' olan Allah ile yüce varlıklardır. Vücut üçe ayrılır: Olası varlık ya da ortaya çıkan ve sonra yok olan varlık; Olası ve zorunlu varlık; özü gereği gerekli olan varlık (Tanrı). İbn-i Sina Tanrı'yı ' 'varlığı zorunlu olan' olarak belirtir ve bu fikir ona hastır. Akıl konusundaki görüşleri Aristotales'ten farklı olan İbn-i Sina'ya göre, akıl 5 çeşittir. Akıl konusunda Eflatun'un idealizmi ile Aristoteles'in deneyciliğini uzlaştırmaya, birleştirici bir akıl görüşü ortaya koymaya çalışmıştır.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Thomas Aquinas</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Thomas Aquinas bilgi, metafizik, siyaset, ruhun ölümsüzlüğü hakkında fikirleri ile skolastik düşüncenin önemli ismi ünlü Hıristiyan filozofdur fakat aynı zaman fikirleriyle Orta Çağ skolastik düşüncesinden Rönesans düşüncesine geçişte önemli bir yere de sahiptir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Francis Bacon</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Bacon İngiliz filozof, bilim adamı, devlet adamı ve yazar. Bacon'ın felsefesinin merkezinde bilim vardır. Bilimin insanları aydınlatma ve geliştirme işlevini öne çıkarır. O'na göre bilim, doğanın özüne yönelmelidir. Bacon doğayı deneyle kavramaya çalışmıştır. Pragmatizm ile sonuçlanan deney temeline dayanan İngiliz felsefesinin ilk tohumlarını atmıştır. Bacon'a göre bilimin başlıca yönetemi tümevarımdır. Bacon yapıtlarıyla bilimin ve felsefenin, gelişimini göstermiş, doğa ve akıl arasında bir bağ kurulabileceği fikrini yerleştirmiştir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">René Descartes</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Yaşamının çoğunu Hollanda’da geçirmiş Fransız bir filozof olan Descartes matematikçi ve yazardır. Modern Filozofinin Babası unvanını almıştır ve kendisini takip eden Batı felsefesi çoğunlukla onun günümüzde hala çalışılan yazılarına cevap niteliğindedir. Özellikle “İlk Felsefe Üzerine Düşünceler” hala çoğu üniversitenin felsefe bölümünde standart bir kaynak olarak kabul edilir. Descartes’ın matematiğe katkısı da aynı derecede belirgindir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Spinoza</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Zamanında anlaşılmayan pek çok filozof gibi Spinoza da yanlış anlaşılmanın ve doğru anlaşılmamanın muhatabı olmuş, tuhaf bir çelişkiyle hem en büyük din karşıtı sayılmış, hem de eserinin temel kaynağının Tanrı sevgisi olduğu söylenmiştir. Bunlarla birlikte Spinoza'nın tam bir bilge yaşamı yaşadığı belirtilebilir. En büyük eseri Ethica adlı kitaptır.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">John Locke</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">ohn Locke İngiliz klasik liberal filozofdur ve 17. yüzyılın en önemli düşünürlerinden biridir. Düşünce özgürlüğünü, insan eylemlerini akla göre düzenlemek anlayışını en geniş ölçüde yayan ilk düşünür olduğu için Avrupa'daki aydınlanma ve Akıl Çağı'nın gerçek kurucusu olarak kabul edilir. John Locke'a göre insan zihni doğuştan boş bir levhadır. Daha sonra bu zihin deneyimle birlikte dolar.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Hegel</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Hegel felsefe tarihinin en etkili düşünürlerinden biri olan Alman filozofdur. Etkisi, hem onu takdir edenler hem de acımasızca eleştirenler gibi çok farklı konumlardaki insanlar üzerinde çok geniş bir yelpazede etkili olmuştur. Felsefenin sürekli tartışılan sorunlarının fasit dairesinin dışına çıkmak için, muhtemelen felsefede ilk kez, tarih ve yapının önemli olduğunu ileri sürdü. Efendi-köle diyalektiğinin kavramsallaştırması öz farkındalık oluşması için ötekinin öneminin altını çizdi.</p>
                    </div>
                  </div>

                  <div class="max-w-sm h-auto rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Jean-Paul Sartre</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Sartre ünlü Fransız yazar ve düşünür. Felsefi içerikli romanlarının yanı sıra her yönüyle kendine özgü olarak geliştirdiği Varoluşçu felsefesiyle de yer etmiş; bunlarla beraber  varoluşçu Marksizm şekillendirmesi ve siyasetteki etkinlikleriyle 20. yüzyıl'a damgasını vuran düşünürlerden biri olmuştur.</p>
                    </div>
                  </div>

            </div>
          </div>


        </section>
      </main>
    </div>
  )
}

export default library