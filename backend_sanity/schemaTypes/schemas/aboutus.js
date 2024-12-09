export default{
    name: 'abouts',
    title:'About-US',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'text',
        },
        {
            name: 'imageurl',
            title: 'ImageURL',
            type: 'image',
            options:{
                hotspot: true
            }
        }
    ]
}