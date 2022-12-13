import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardDetails="Everyday 9am-8pm" img={clock}/>
            <InfoCard bgclassName="bg-accent" cardTitle="Our Locations" cardDetails="Brooklyn,NY 10036, United States" img={marker}/>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardDetails="+000123456789" img={phone}/>

        </div>
    );
};

export default Info;