import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"Reciepetitle":"MEXICAN PIZZA","Imglink":"https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=YD9gHSr9qWKJmEq23Qw7KcLSRsutzkrNyLuY_kNH1lI="},
            {"Reciepetitle":"SUSHI","Imglink":"https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1c2hpfGVufDB8fDB8fHww"},
            {"Reciepetitle":"TACOS","Imglink":"https://media.istockphoto.com/id/1333647378/photo/homemade-american-soft-shell-beef-tacos.webp?b=1&s=170667a&w=0&k=20&c=EkTSsbK0z4o8Oa9rRJfy0upjRH3_pqRoDeNf6qNHYqk="},
            {"Reciepetitle":"PAD THAI","Imglink":"https://media.istockphoto.com/id/510163478/photo/pad-thai.webp?b=1&s=170667a&w=0&k=20&c=_o2CDSStNmNu6E5LxE2fEQd9Zmmc2tVycKRFcPwdQHQ="},
            {"Reciepetitle":"PHO","Imglink":"https://media.istockphoto.com/id/535168737/photo/vietnamese-pho-noodle-soup-dish.webp?b=1&s=170667a&w=0&k=20&c=bSGBy5ged-WsVzOv81f42LubHc2nB5TA46ruy9CTa_k="},
            {"Reciepetitle":"PAELLA","Imglink":"https://media.istockphoto.com/id/513489444/photo/paella-valenciana-spanish-food.webp?b=1&s=170667a&w=0&k=20&c=hY9AT4__GgLrdImpW3ID7yCBm4uBunF27aNECr3qFkI="},
            {"Reciepetitle":"RAMEN","Imglink":"https://media.istockphoto.com/id/1184359662/photo/stir-fried-noodles-close-up.webp?b=1&s=170667a&w=0&k=20&c=T1AVwanX1rKbRY5RRP9IBlemTAMTRiQqVcT3QpDrPKk="},
            {"Reciepetitle":"CARBONARA","Imglink":"https://media.istockphoto.com/id/1208350004/photo/carbonara-pasta-spaghetti-with-pancetta-egg-parmesan-cheese-and-cream-sauce-dark-gray-table.webp?b=1&s=170667a&w=0&k=20&c=ajiSDsut5M1Use7gfh8Q0O056VftwNRVi21ZEWdsN_c="},
            {"Reciepetitle":"MOCHI","Imglink":"https://media.istockphoto.com/id/1485707114/photo/japanese-colorful-mochi-on-gray-stone-surface.webp?b=1&s=170667a&w=0&k=20&c=ycc4k4i1y8zZ_xELgTo6LM4uD40Wc6kIOQJxq58RZd8="},
            {"Reciepetitle":"CROISSANT","Imglink":"https://media.istockphoto.com/id/489647961/photo/croissants.webp?b=1&s=170667a&w=0&k=20&c=iHlYWHuNYDrP3M_yKADvxHXSCTGqg7UMg4n6frrcGj8="},
            {"Reciepetitle":"SALAD","Imglink":"https://media.istockphoto.com/id/1425572827/photo/bean-sprouts-salad-on-rustic-table.webp?b=1&s=170667a&w=0&k=20&c=v9aF4Nww0ZSDYRv23gAXHq6dbI4kzDa_uKAHhc5EXVs="},
            {"Reciepetitle":"STEAK","Imglink":"https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.webp?b=1&s=170667a&w=0&k=20&c=A4h_JCxhml31g1X_XEVMOMOlyRPRw9E-FS4jJN-Ugeg="},
            {"Reciepetitle":"BURGER","Imglink":"https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.webp?b=1&s=170667a&w=0&k=20&c=mzjfEg69UvFwH7rp2A7E41rhPB45mHZNfOe3G7iZMiw="},
            {"Reciepetitle":"SAMOSA","Imglink":"https://media.istockphoto.com/id/1157402361/photo/mini-samosa-with-sauce.webp?b=1&s=170667a&w=0&k=20&c=hOyXrIJDT2JM4p4vPiNdM8fH110hr3ThbyEdYjjlh7w="},
            {"Reciepetitle":"KEBAB","Imglink":"https://media.istockphoto.com/id/1408897449/photo/adana-kebab-served-in-a-wooden-cutting-board-isolated-on-wooden-background-side-view.webp?b=1&s=170667a&w=0&k=20&c=tezKTrr3n4ii8k9dQcVM4Ni-N1zP4lc3BiVGh_ZLTkI="}
        ]
    )

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p><b><center><h1>VIEW ALL RECIEPES</h1></center></b></p>
                        <div className="row g-3">

                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.Imglink} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">{value.Reciepetitle}</p>
                                        </div>
                                    </div>
                                </div>
                                }
                            )}
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ViewAll