import React from 'react'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
const logophoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/P_philosophy.svg/625px-P_philosophy.svg.png'
const photo1 = "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12761531/image/43a41b78b1ce618e424839fc08854a62"
const photo2 = "https://cdn.evrimagaci.org/aL2qAYPaF5d0jMwVe3FM42zyEXo=/evrimagaci.org%2Fpublic%2Fcontent_media%2Fa382b9ff450566de439ecb7f6d89bb38.jpg"
const photo3 = "https://cdn.evrimagaci.org/RuL-2mzZ2wUKKmO4njQNaT-rIxc=/evrimagaci.org%2Fpublic%2Fcontent_media%2F25c7b4fb50e69d0a562eee4814552024.jpg"
const photo4 = "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/b2de3ac9-b5d3-445d-b4f6-cefee3508e71"
const photo5 = "https://arkakapak.babil.com/wp-content/uploads/2021/06/20.yy-dusunurleri.jpg"

const quizmenu = () => {

    
  return (
<>
    <Head>
      <title>Felsefe Quiz</title>
      <meta title='Felsefe Quiz'/>
      <link rel='icon'/>
    </Head>
    <main className='bg-gradient-to-tl from-black via-slate-950 to-indigo-950 px-5 w-full'>
        <section className='min-h-screen w-full items-center'>
            <nav className='py-5 mb-12 flex justify-between items-center align-middle h-20 w-full'>
            <div className='flex items-center justify-between'>
                <img src={logophoto} alt='Logo' className='px-5 h-10 w-auto' />
                <h1 className='font-burtons text-2xl'>Made by. LIBEB</h1>
            </div>
            
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
                <li className='bg-gradient-to-tl from-slate-900 to-indigo-800 text-white px-4 py-2 rounded-md ml-8'><a href='/'>Anasayfa</a></li>
            </ul>
            </nav>


            <div className='h-full w-full p-2 rounded-md bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 text-center items-center justify-center'>
                <div className='h-auto w-full bg-gradient-to-b from-slate-950/50 to-slate-950  pt-10 items-center justify-center'>
                    <h1 class="text-2xl py-2 font-bold text-gray-100/95 h-auto w-full">
                        Bilgine güvendiğin veya kendini test etmek istediğin konuyu seç ve sınava başla
                    </h1> 
                    <div className="flex xl:flex-row flex-col flex-auto justify-center w-full py-5 h-[50%] items-center">
                        <div class="max-w-sm m-2 rounded-lg shadow h-5/6 bg-gray-800/60 border-gray-700">
                            <Link href="./quiz/101">
                                <img class="rounded-t-lg h-60 w-96" src={photo1} alt="" />
                            </Link>
                            <div class="p-5">
                                <Link href="./quiz/101">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Birinci Ünite</h5>
                                </Link>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MÖ 6. Yüzyıl – MS 2. Yüzyıl Felsefesi</p>
                                <Link href="./quiz/101" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                                    SINAVA GIT
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>

                        <div class="max-w-sm m-2 rounded-lg shadow h-5/6 bg-gray-800/60 border-gray-700">
                            <Link href="./quiz/202">
                                <img class="rounded-t-lg h-60 w-96" src={photo2} alt="" />
                            </Link>
                            <div class="p-5">
                                <Link href="./quiz/202">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">İkinici Ünite</h5>
                                </Link>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MS 2. Yüzyıl – MS 15. Yüzyıl Felsefesi</p>
                                <Link href="./quiz/202" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                                    SINAVA GIT
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>

                        <div class="max-w-sm m-2 rounded-lg shadow h-5/6 bg-gray-800/60 border-gray-700">
                            <Link href="./quiz/303">
                                <img class="rounded-t-lg h-60 w-96" src={photo3} alt="" />
                            </Link>
                            <div class="p-5">
                                <Link href="./quiz/303">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Üçüncü Ünite</h5>
                                </Link>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">15. Yüzyıl – 17. Yüzyıl Felsefesi</p>
                                <Link href="./quiz/303" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                                    SINAVA GIT
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>

                        <div class="max-w-sm m-2 rounded-lg shadow h-5/6 bg-gray-800/60 border-gray-700">
                            <Link href="./quiz/404">
                                <img class="rounded-t-lg h-60 w-96" src={photo4} alt="" />
                            </Link>
                            <div class="p-5">
                                <Link href="./quiz/404">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Dördüncü Ünite</h5>
                                </Link>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">18. Yüzyıl – 19. Yüzyıl Felsefesi</p>
                                <Link href="./quiz/404" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                                    SINAVA GIT
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>

                        <div class="max-w-sm m-2 rounded-lg shadow h-5/6 bg-gray-800/60 border-gray-700">
                            <Link href="./quiz/505">
                                <img class="rounded-t-lg h-60 w-96" src={photo5} alt="" />
                            </Link>
                            <div class="p-5">
                                <Link href="./quiz/505">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Beşinci Ünite</h5>
                                </Link>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">20. Yüzyıl Felsefesi</p>
                                <Link href="./quiz/505" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none0 bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 hover:bg-indigo-800 focus:ring-indigo-800">
                                    SINAVA GIT
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
</>
  )
}
/**function Card(props) {
    return (
      <div className="shadow shadow-gray-300 m-5 rounded-md w-1/4 flex">
        <img src={props.img} className="w-56 h-44 object-cover" />
        <div className="m-4 flex-grow">
          <h2 className="leading-relaxed mb-2">{props.title}</h2>
          <p className="leading-relaxed">{props.description}</p>
          <h3 className="text-2xl mt-2">{props.price}</h3>
          <button className="card__btn">Add to Cart</button>
        </div>
      </div>
    );
  }
**/
export default quizmenu;