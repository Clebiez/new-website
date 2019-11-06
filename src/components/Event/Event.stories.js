import React from 'react';
import Event from './Event';

const talk = {
    edition: 42,
    meetupId: 12000,
    title: 'This is an awesome talk !',
    slug: 'edition-5-versioning-avec-git',
    date: '2020-10-09 18:30',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque ligula, eu auctor nisl consequat et. Cras dapibus urna at velit accumsan mollis. Mauris vitae eros sollicitudin, pretium metus nec, faucibus urna. ',
    tags: ['lorem', 'ipsum'],
    speakers: [
        {
            firstName: 'Clément',
            lastName: 'Le Biez',
            slug: 'clement-lebiez',
            picture: 'clement-lebiez.jpg',
        },
        {
            firstName: 'Alexis',
            lastName: 'Janvier',
            slug: 'alexis-janvier',
            picture: 'alexis-janvier.jpg',
        },
    ],
    picture: 'https://cdn.worldvectorlogo.com/logos/react.svg',
};

export default {
    component: Event,
    title: 'Event',
};

export const Classical = () => (
    <Event
        speakers={talk.speakers}
        picture={talk.picture}
        edition={talk.edition}
        title={talk.title}
        description={talk.description}
    />
);
