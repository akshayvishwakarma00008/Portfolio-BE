export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'order', 
            title: 'Order',
            type: 'number',
            description: 'Controls the display order of skills',
            initialValue: 0,
          },

    ]
}