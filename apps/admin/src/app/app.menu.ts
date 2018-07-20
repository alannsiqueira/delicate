export const MENU = [
    {
        'id': 'applications',
        'translate': 'MENU.APPLICATIONS',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'title': 'Painel de controle',
                'translate': 'MENU.DASHBOARDS',
                'type': 'item',
                'url': '',
                'icon': 'dashboard',
                'badge': {
                    'title': 8,
                    'bg': '#525e8a',
                    'fg': '#FFFFFF'
                }
            },
            {
                'id': 'products',
                'title': 'Products',
                'translate': 'MENU.PRODUCTS',
                'type': 'item',
                'url': '/product'
            },
            {
                'id': 'sales',
                'title': 'Sales',
                'translate': 'MENU.SALES',
                'type': 'item',
                'url': ''
            },
        ]
    }
];

export const defaultLanguage = {
    'id': 'pt',
    'title': 'Português',
    'flag': 'pt'
};

export const languages = [
    {
        'id': 'pt',
        'title': 'Português',
        'flag': 'pt'
    },
    {
        'id': 'en',
        'title': 'English',
        'flag': 'us'
    }

];
