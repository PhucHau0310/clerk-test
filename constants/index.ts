import home from '../public/assets/home.svg';
import create from '../public/assets/create.svg';
import people from '../public/assets/people.svg';
import saved from '../public/assets/saved.svg';
import heart from '../public/assets/heart.svg';

export const sideBarLinks = [
    {
        icon: home,
        route: '/',
        label: 'Home',
    },
    {
        icon: create,
        route: '/create-post',
        label: 'Create Post',
    },
    {
        icon: people,
        route: '/people',
        label: 'People',
    },
    {
        icon: saved,
        route: '/saved-posts',
        label: 'Saved Posts',
    },
    {
        icon: heart,
        route: '/liked-posts',
        label: 'Liked Posts',
    },
];
