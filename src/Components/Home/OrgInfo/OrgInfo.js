import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import OrgInfoCard from '../OrgInfoCard/OrgInfoCard';


const OrgInfo = () => {

    const orgData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10003 USA',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+15697854124',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
        <div className="w-75  row ">
            {
                orgData.map(info => <OrgInfoCard info={info} key={info.title}></OrgInfoCard>)
            }
        </div>
    </section>
    );
};

export default OrgInfo;