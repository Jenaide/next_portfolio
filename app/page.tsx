"use client";

import React from 'react';
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';
import { useForm } from '@formspree/react';


import {AiFillLinkedin, AiFillGithub, AiFillMediumSquare, AiFillMail} from 'react-icons/ai';
import { BiLogoBootstrap, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { SiCsharp, SiDocker, SiDotnet, SiExpress, SiFlask, SiMysql, SiPostman } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";


import Jenaide from '../public/Jenaide.jpg'
import Beyondblog from '../public/beyondblog.png'

const portfolioStyle = {
  layout: 'responsive',
  hover: 'opacity-75',
}

const scroll = {
  scrollBehavior: 'smooth',
}


export default function Home() {

  const [state, handleSubmit] = useForm('mrgzblg');

  if (state.succeeded) {
    return <p className='text-5xl text-rose-500 justify-center items-center flex py-50'>Successfully Submitted</p>
  }
  
  return (
    <div>
      <main className='bg-white px-10 md:px-10 lg:px-40 dark:bg-gray-950'>
        <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between dark:text-white'>
                <h1 className='text-xl font-dancing dark:text-white'>Jenaide Sibolie</h1>
                <nav className='hidden lg:block md:block'>
                    <ul className='flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4'>
                        <li className='hover:text-rose-500'><a href='#about' style={{  }}>About</a></li>
                        <li className='hover:text-rose-500'><a href='#skills' style={{  }}>Skills</a></li>
                        <li className='hover:text-rose-500'><a href='#projects' style={{  }}>Portfolio</a></li>
                        <li className='hover:text-rose-500'><a href='#contact' style={{  }}>Contact</a></li>
                    </ul>
                </nav>
                <ul className='flex items-center justify-end'>
                    <li>
                        <a
                            href='https://docs.google.com/document/d/10WaFhnpxxMQA68ZpEzFik0C7HFErhqdU2VqfmDKtw50/edit'
                            target='_blank'
                            rel='noopener norefer'
                        >
                            <button className='bg-gradient-to-r from-rose-950 to-rose-500 px-6 text-white rounded ml-9'>Resume</button>  
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div className='text-center p-10 ' id='about'>
              {/*<div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
                <div className='relative mx-auto rounded-full w-50 h-50 overflow-hidden md:h-80 md:w-96 lg:h-96'>
                  <Image src={Jenaide} fill={true} alt={'Jenaide'} />
                </div>
              </div>*/}
              <h2 className='text-5xl py-10 text-rose-700 font-medium dark:text-gradient-to-r from-rose-400 to-cyan-500 md:text-6xl'>
              <Typewriter
                options={{
                  strings: [
                    "Hi I'm Jenaide Sibolie"
                  ],
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    skipAddStyles: true,
                    deleteSpeed: 50,
                }} 
              />
              </h2>
              <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
               I&apos;m detailed-orientated and passionate recent graduate from the ALX program. I&apos;m eager to contribute to
               innovative software solutions as a Junior developer. I&apos;m a quick learner with strong foundation in programming
               languages and software development methodologies, seeking an opportunity to grow and excel in a dynamic enviroment.
              </p>
              
              <div className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:gap-10'>
                <a href="https://www.linkedin.com/in/jenaide-sibolie-57a340158/" target='_blank' className='hover:text-rose-500'><AiFillLinkedin /></a>
                <a href="https://medium.com/@jenaidesibolie" target='_blank' className='hover:text-rose-500'><AiFillMediumSquare /></a>
                <a href="https://github.com/Jenaide" target='_blank' className='hover:text-rose-500'><AiFillGithub /></a>
                <a href="mailto:jenaidesibolie@gmail.com" target='_blank' className='hover:text-rose-500'><AiFillMail /></a>
                <a href=""></a>
              </div>
            </div>
        </section>

        {/*------------- Skills Section  -------------------------------------------*/}
        <div id='skills'>
          <div>
            <h1 className='text-5xl text-end text-black dark:text-gray-200'>My <span className='text-rose-700'>Skills</span></h1>
          </div>
          <div className='text-center p-10 rounded-sm my-10'>
            <h2 className='text-3xl p-7 dark:text-gray-200'>Languages</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoPython className='w-40 h-40 text-sky-700 '/>Python</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-40 h-40 text-yellow-400 '/>JavaScript</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiCsharp className='w-40 h-40 text-purple-900 '/>C #</div>
            </div>
            <h2 className='text-3xl p-7 dark:text-gray-200'>BackEnd Technologies <span className='text-rose-700'>and Frameworks</span></h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoNodejs className='w-40 h-40 text-green-900 md:w-40 lg:w-48 lg:h-48'/>Node JS</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiExpress className='w-40 h-40 text-green-900 md:w-40 lg:w-48 lg:h-48'/>Express JS</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiFlask className='w-40 h-40 text-gray-600 md:w-40 lg:w-48 lg:h-48'/>Flask</div>
              <div className='p-2 text-xl dark:text-gray-200'><TbBrandDjango className='w-40 h-40 text-green-950 md:w-40 lg:w-48 lg:h-48'/>Django</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiDotnet className='w-40 h-40 text-gray-200 md:w-40 lg:w-48 lg:h-48'/>.NET</div>
            </div>
            <h2 className='text-3xl p-7 dark:text-gray-200'>Databases</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoMongodb className="w-40 h-40 text-green-500 md:w-40 lg:w-48 lg:h-48" />MongoDB</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiMysql className="w-40 h-40 text-amber-500 md:w-40 lg:w-48 lg:h-48" />MySQL</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoPostgresql className="w-40 h-40 text-blue-950 md:w-40 lg:w-48 lg:h-48" />PostgresQL</div>
            </div>
            <h2 className='text-3xl p-7 dark:text-gray-200'>FrontEnd Technologies <span className='text-rose-700'>and Frameworks</span></h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoHtml5 className='w-40 h-40 text-orange-700 md:w-40 lg:w-48 lg:h-48' />HTML</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoCss3 className='w-40 h-40 text-blue-700 md:w-40 lg:w-48 lg:h-48' />CSS</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoReact className='w-40 h-40 text-sky-400 md:w-40 lg:w-48 lg:h-48' />React</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoTailwindCss className='w-40 h-40 text-cyan-500 md:w-40 lg:w-48 lg:h-48' />TailWindCss</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoBootstrap className='w-40 h-40 text-purple-700 md:w-40 lg:w-48 lg:h-48' />Bootstrap</div>
            </div>
            <h2 className='text-3xl p-7 dark:text-gray-200'>Other <span className='text-rose-700'>Technologies</span></h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoGit className="w-40 h-40 text-amber-600 md:w-40 lg:w-48 lg:h-48"/>Git</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoGithub className="w-40 h-40 text-gray-200 md:w-40 lg:w-48 lg:h-48"/>Github</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiPostman className="w-40 h-40 text-orange-600 md:w-40 lg:w-48 lg:h-48"/>Postman</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiDocker className="w-40 h-40 text-blue-500 md:w-40 lg:w-48 lg:h-48"/>Docker</div>
            </div>
          </div>
        </div>
        {/*---------- education section ---------------------*/}
        {/*---------- projects section ---------------------*/}
        <section className='py-10' id='projects'>
          <div>
            <h3 className='text-5xl py-10 mb-6 dark:text-white'>My <span className='text-rose-700'>Portfolio</span></h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              My portfolio is a collection of different work samples that reflect my craft and experience in <span className='text-rose-700'>
              Full Stack Development</span>. My portfolio includes a variety of different work, such as <span className='text-rose-700'>Flask-Fyaar-project, 
              Trivia-API, Flask_toDo_app, A_simple_flask_API, API_Node.js and BeyondBlog_NodeJS</span> each demonstrating my
              creativity, problem-solving abilities, and professional growth over the years.
              </p>
              <p>Through my portfolio, I aim to showcase the quality of my work and provide potential employers with
                a comprehensive understanding of what I am capable of. It not only highlights my past achievements but, also
                offers insights into my thought process, approach to projects and overall professional development. By exploring my portfolio,
                you will be able to get a deeper understanding of my skills and be able to assess my suitability for your specific needs.
              </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://github.com/Jenaide/BeyondBlog_NodeJS' className='relative'>
                <Image src={Beyondblog} 
                  className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300'
                  
                  style={portfolioStyle as React.CSSProperties}
                  alt='checkout my code'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click to view
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://github.com/Jenaide/BeyondBlog_NodeJS' className='relative'>
                <Image src={Beyondblog} 
                  className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300'
                 
                  style={portfolioStyle as React.CSSProperties}
                  alt='checkout my code'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click to view
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://github.com/Jenaide/BeyondBlog_NodeJS' className='relative'>
                <Image src={Beyondblog} 
                  className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300'
                  
                  style={portfolioStyle as React.CSSProperties}
                  alt='checkout my code'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click to view
                  </p>
                </div>
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://github.com/Jenaide/BeyondBlog_NodeJS' className='relative'>
                <Image src={Beyondblog} 
                  className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300'
                  
                  style={portfolioStyle as React.CSSProperties}
                  alt='checkout my code'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl text-center text-white hover:text-3xl md:text-2xl lg:text-2xl'>
                    Click to view
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className='py-10' id='contact'>
          <h1 className='text-5xl text-center dark:text-gray-200 py-5'>Get In-Contact</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name' className='dark:text-gray-200'>Name</label>
            <input type='text' id='name' className='border-2 border-rose-700 p-2 rounded-lg w-full dark:border-rose-700 dark:bg-black dark:text-gray-200' />
            <label htmlFor='email' className='dark:text-gray-200'>Email</label>
            <input type='email' id='email' className='border-2 border-rose-700 p-2 rounded-lg w-full dark:border-rose-700 dark:bg-black dark:text-gray-200' />
            <label htmlFor='message' className='dark:text-gray-200'>Message</label>
            <textarea name='message' id='message' cols={20} rows={10} className='border-2 border-rose-700 p-2 py4 rounded-lg w-full dark:border-rose-700 dark:bg-black dark:text-gray-200'></textarea>
            <button disabled={state.submitting} className='bg-gradient-to-r from-rose-950 to-rose-300 hover:bg-rose-500 text-white px-4 py-2 rounded-lg'>Send</button>
          </form>
        </section>
      </main>
      <Analytics />
    </div>
  )
}
