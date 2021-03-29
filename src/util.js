import {v4 as uuidv4} from 'uuid';

function chillHop(){

    return[
        {
            name:"What Was Before",
            artist:"Philanthrope, Leavv",
            cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9923",
            color:["#A0AB63","#3F7368"],
            id:uuidv4(),
            active : true,
        },
        {
            name:"Upstate",
            artist:"Philanthrope, Brock Berrigan, The Field Tapes",
            cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=10245",
            color:["#945A3E","#DBB86A"],
            id:uuidv4(),
            active : false,
        },
        {
            name:"endurance",
            artist:"invention_",
            cover:"https://chillhop.com/wp-content/uploads/2020/08/3a92d38d5b2605bb47bbd4593e61cfd17ca7cf98-1024x1024.jpg",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=8742",
            color:["#8FCAC6","#C04F3F"],
            id:uuidv4(),
            active : false,
        },
        {
            name:"The Story",
            artist:"Deeb, Asteroid",
            cover:"https://chillhop.com/wp-content/uploads/2020/07/6ca962afb3741567f2f2748dd6c71335cd80f701-1024x1024.jpg",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=8582",
            color:["#84A18F","#021E2A"],
            id:uuidv4(),
            active : false,
        },
    ]
}

export default chillHop;