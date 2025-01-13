export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}