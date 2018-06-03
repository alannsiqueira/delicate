export const navigation = [
    {
        'id': 'applications',
        'translate': 'NAV.APPLICATIONS',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'translate': 'NAV.DASHBOARDS',
                'type': 'collapse',
                'icon': 'dashboard',
                'badge': {
                    'title': 8,
                    'bg': '#525e8a',
                    'fg': '#FFFFFF'
                },
                'children': [
                    {
                        'id': 'sales',
                        'title': 'Sales',
                        'translate': 'NAV.SALES',
                        'type': 'item',
                        'url': '/'
                    },
                ]
            }
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
