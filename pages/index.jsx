import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';


const bag2 = "https://c4.wallpaperflare.com/wallpaper/384/613/223/raphael-athens-philosophy-arch-wallpaper-preview.jpg"
const logophoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/P_philosophy.svg/625px-P_philosophy.svg.png'

export const metadata = {
  title: 'Felsefe Quiz',
  description: 'dev by kawa media',
}

export default function Home() {
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
              <li className='bg-gradient-to-tl from-slate-900 to-indigo-800 text-white px-4 py-2 rounded-md ml-8'><a href='quizmenu'>Başla</a></li>
            </ul>
          </nav>


          <div className='h-auto w-full p-2 rounded-md bg-gradient-to-tl m-2 from-gray-500/80 to-indigo-900/80 text-center items-center justify-center'>

            <div class="bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${bag2})`}}>
              <div className='h-auto w-full bg-gray-950/90 pt-10 items-center justify-center'>
              <h1 class="text-6xl p-2 font-burtons font-extrabold text-violet-800">
                FELSEFE YAPALIM
              </h1>
              <p className='font-mono text-lg text-gray-300 py-10'>Oyunumuz bir bilgi yarışması eğlencesi ile felsefe dersini birleştirip hem eğlendiren hem de öğreten bir yapı sunmaktadır<br/>
              Düşünürler bölümünden hem oyuna hazırlanıp hem de filozoflarla tanışabilir, hayata onların gözünden bakabiliriz
              </p>

              <div className='flex justify-around w-full bg-gray-950/50 h-auto py-5'>
                <a href="/library" class="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                  Düşünürler
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="./quizmenu" class="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                  Oyuna Başla
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
              </div>

            </div>
          </div>

          <div className='h-auto font-mono text-gray-300 w-full p-5 rounded-md m-2 mt-10 bg-slate-950/20 text-center items-center justify-center border-gray-700/30 border-2'>
            <p className='text-3xl font-extrabold pb-6 pt-4'>DÜŞÜNÜRLER BÖLÜMÜ</p>
            <p>
              Bir sürü kanunlar yapıp bunları değiştirmekle ömür geçirirler, sonunda en iyisini bulacağız diye.<br/>
              <span className='text-gray-600'>Devlet, Platon</span>
            </p>

            <div className='flex justify-around my-7'>
                  <div class="max-w-sm  rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Konfüçyüs</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Konfüçyüs ya da Kongzi, Çinli filozof, eğitimci ve yazar. M.Ö. 551 - M.Ö. 479 tarihleri arasında, Doğu Zhou Hanedanlığı döneminde yaşadığı sanılmaktadır. Kong Qiu adı altında, Lu devletinin Qufu şehrinde doğmuş ve aynı şehirde ölmüştür. Çin uygarlığının en önemli temsilcilerinden biri kabul edilir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm 0 rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Thales</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Miletli Thales, Milet, İyonya'dan bir Antik Yunan matematikçi, astronom ve Sokrat öncesi filozoftu. İlk filozoflardan olduğu için felsefenin ve bilimin öncüsü olarak adlandırılır. İyonya Aydınlanmasının başlatıcısı olarak bilinir ve Eski Yunan'ın Yedi Bilge'sinden ilkidir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm rounded-lg shadow bg-gray-800/60 :border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Heraklitos</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Efesli Heraklitos, Efes'te yaşamış Sokrates öncesi Yunan filozof. Efes'in yerlisi olduğu ve babasının adının Bloson olduğu gibi detaylar dışında hayatı hakkında pek az şey bilinmektedir. Batı felsefe tarihinde dinamik bir felsefi sistem ortaya koyan ilk kişidir.</p>
                    </div>
                  </div>

                  <div class="max-w-sm rounded-lg shadow bg-gray-800/60 border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Karl Marx</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">Karl Marx, 19. yüzyılda yaşamış Alman filozof, politik ekonomist ve bilimsel sosyalizmin kurucusu. Bir müddet gazetecilik de yapan Marx, iktisadi ve beşerî konularda eleştirel fikirler ve tespitler ortaya koymuştur.</p>
                    </div>
                  </div>

            </div>
          </div>


        </section>
      </main>
    </div>
  )
}
