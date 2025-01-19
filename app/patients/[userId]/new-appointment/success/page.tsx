import { Button } from '@/components/ui/button';
import { Doctors } from '@/constants';
import { getAppointments } from '@/lib/actions/appointment.actions';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = async ({ params: { userId}, searchParams}:SearchParamProps) => {
    const appointmentId = (searchParams?.appointmentId as string) || '';
    const appointment = await getAppointments(appointmentId);

    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician)

  return (
    <div className='flex h-screen max-h-screen px-[5%]'>
      <div className='success-img'>
        <Link href='/'>
        <Image
        src='/assets/icons/logo-full.svg'
        height={1000}
        width={1000}
        alt='logo'
        className='h-10 w-fit'

        />
        
        </Link>

        <section className='flex flex-col items-center'>
            <Image
            src='/assets/gifs/success.gif'
            height={300}
            width={280}
            alt='success'

            />
        <h2 className='header mb-6 max-w-[600px] text-center'>

            Your <span className='text-purple-500'>appointemnt</span> has been successfully booked!

        </h2>

        <p className='text-sm'>Thank you for reaching out! We will connect with you soon to confirm and take things forward.</p>

        </section>

        <section className='request-details'>
            <p>Requested appointment details:</p>
            <div className='flex items-center gap-3'>
                <Image
                src={doctor?.image!}
                alt='doctor'
                width={100}
                height={100}
                className='size-6'
                
                />
                <p className='whitespace-nowrap'>Dr. {doctor?.name}</p>
                <div className='flex gap-2'>
                    <Image
                    src='/assets/icons/calendar.svg'
                    alt='calendar'
                    width={24}
                    height={24}

                    />
                    <p>{formatDateTime(appointment.schedule).dateTime}</p>

                </div>
                

            </div>

        </section>

        <Button variant='outline' className='shad-primary-btn ' asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
                New Appointment
            </Link>

        </Button>

        <p className='copyright'>
        © 2024 CareVaultX.

        </p>




      </div>
    </div>
  )
}

export default Success
