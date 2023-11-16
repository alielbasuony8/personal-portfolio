"use client";
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast'

export default function Contact() {

    const {ref} = useSectionInView("Contact")
  return (
    <motion.section ref={ref} id='contact' className='
    scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Feel free to contact me directly <a href="mailto:alielbasuony8@gmail.com" className='underline'>here</a> or through this form.</p>
        <form className='mt-10 flex flex-col dark:text-black' action={async FormData =>{
            const {data, error} = await sendEmail(FormData)
            if(error){
                toast.error(error)
                return;
            }
            toast.success('Email send successfully')
            
        }}>
            <input className='h-14 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' type="email" placeholder='Your email'
            required maxLength={500} name='email'/>
            <textarea className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none ' placeholder='Drop me a message' required maxLength={500} name='message'/>
            <SubmitBtn/>
        </form>
    </motion.section>
  )
}
