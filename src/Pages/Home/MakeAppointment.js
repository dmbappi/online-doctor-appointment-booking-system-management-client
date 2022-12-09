import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt=''/>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
               <h2 className='text-3xl text-white py-5'>Make an Appointment</h2>
               <p className='text-white pb-5'>Est invidunt ipsum sed labore nonumy, nonumy sadipscing gubergren ipsum nonumy invidunt elitr gubergren lorem magna. Gubergren ea sadipscing consetetur.</p> 
               <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;