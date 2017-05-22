import { MenuItem } from 'app/fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Stations',
        icon: 'glyphicon-stations',
        route: '/stations',
        submenu: null
    },
    {
        text: 'Help',
        icon: 'glyphicon-flag',
        route: '/helps',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: '/settings',
        submenu: null
    }
];
