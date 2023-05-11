import React from "react";
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
const logophoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/P_philosophy.svg/625px-P_philosophy.svg.png'
import questions from "../../../quest.json";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const addphoto = "https://i.ytimg.com/vi/lazInhAtw50/maxresdefault.jpg"



const Quiz = () => {
  const router = useRouter()
  const [unit, setUnit] = useState();
  const [datas,setDatas] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [dataslength, setdataslength] = useState()
  

  useEffect(() => {
    const questId = router.query.id

    if (questId == "101"){
      setUnit(`q1`)
    }
    if (questId == "202"){
      setUnit(`q2`)
    }
    if (questId == "303"){
      setUnit(`q3`)
    }
    if (questId == "404"){
      setUnit(`q4`)
    }
    if (questId == "505"){
      setUnit(`q5`)
    }

    
  },[router.query.id])

  useEffect(() => {
    if (unit) {
      setDatas(questions[unit]);
    }
  }, [unit]);

  useEffect(() => {
    setdataslength(datas && datas.length)
    console.log(dataslength)
  },[datas])
    
    
  console.log(datas)
    

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };
  
    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < datas.length && setCurrentQuestion(nextQues);
    };

    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleAnswerOption = (answer) => {
        setSelectedOptions([
          (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
      };

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < datas.length; i++) {
          datas[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      };

      const percent = score * dataslength / 100

    return(
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
              <img src={logophoto} alt='Logo' className='px-5 h-10' />
              <h1 className='font-burtons text-2xl'>Made by. LIBEB</h1>
            </div>
            
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li className='bg-gradient-to-tl from-slate-900 to-indigo-800 text-white px-4 py-2 rounded-md ml-8'><a href='/'>Anasayfa</a></li>
            </ul>
          </nav>


          <div className='h-full w-full p-2 rounded-md bg-gradient-to-tl from-gray-500/80 to-indigo-900/80 text-center items-center justify-center'>
            <div className='h-auto w-full bg-gradient-to-b from-slate-950/50 to-slate-950  pt-10 items-center justify-center'>
                <h1 class="text-6xl py-2 font-burtons font-extrabold text-violet-800 w-full">
                    Quiz
                </h1> 
                {showScore ? (
                <div className="bg-gradient-to-tl from-gray-500/10 to-indigo-600/10 py-10 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-semibold text-center text-white">
                  Puanınız {dataslength} üzerinden {score}
                  {score >= dataslength ? <h1>Vayy Tam Puan Bu Konuda Gerçekten Çok İyi Olmalısın 🚀🚀</h1> : <h1>Malesef Hataların Var. Boş Ver Hepimiz İnsanız Hatalarımız Olur 👽</h1>}
                  <div className="h-10 w-full bg-slate-500 rounded-lg mt-10 items-center justify-center">
                    <div className="h-full w-full bg-violet-600 rounded-lg items-center text-center justify-center">
                      <span className="p-2 text-white font-bold">{`${score * dataslength / 100}%`}</span>
                    </div>
                  </div>
                  </h1>
                  <Link href="/" className="w-[20%] p-5 m-10 bg-indigo-600 rounded-lg font-mono text-2xl">Anasayfaya Dön</Link>
                  <br></br>
                  <p>After Game Ads</p>
                  <img src={addphoto} alt="Add" className="w-[25%] h-54" />
                </div>
                
                
                ) : (
                <div className="flex flex-col w-full py-5 h-auto bg-transparent justify-center items-center">
                    
                    <div className="w-10/12 my-10">
                        <div className="flex flex-col w-full py-10">
                        <div className="flex flex-col items-start w-full">
                            <h4 className="mt-10 text-xl text-white/60">Soru {currentQuestion + 1} of {dataslength}</h4>
                            <div className="mt-4 text-2xl text-white">
                            {datas && datas[currentQuestion].question}
                            </div>
                        </div>
                        {datas && datas[currentQuestion].answerOptions.map((answer, index) => (
                            <div
                            key={index}
                            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                            onClick={(e) => handleAnswerOption(answer.answer)}
                            >
                            <input type="radio" name={answer.answer} value={answer.answer} onChange={(e) => handleAnswerOption(answer.answer)} checked={ answer.answer === selectedOptions[currentQuestion]?.answerByUser } className="w-6 h-6 bg-black" />
                            <p className="ml-6 text-white">{answer.answer}</p>
                            </div>
                        ))}
                        </div>
                        <div className="flex justify-between w-full mt-4 text-white">
                            <button onClick={handlePrevious} className="w-[49%] py-3 bg-indigo-600 rounded-lg">Önceki</button>
                            <button onClick={currentQuestion + 1 === dataslength ? handleSubmitButton : handleNext}className="w-[49%] py-3 bg-indigo-600 rounded-lg">{currentQuestion + 1 === dataslength ? "Bitir" : "Sonraki"}</button>
                        </div>
                    </div>
                
                </div>
                )
                }
              </div>
          </div>
        </section>
      </main>
    </>
    )
}

export default Quiz;
