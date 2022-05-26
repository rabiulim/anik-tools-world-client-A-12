import React from 'react';

const Banner = () => {
    return (
        <div class="hero  bg-base-200 m-6">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=20&m=1034249292&s=612x612&w=0&h=COqR9oHyH23bFl7v4XotimSp1gSdzxNlHF3FrztqyrA=" />
                <div>
                    <h1 class="text-5xl font-bold">Great News for You!!</h1>
                    <p class="py-6 text-xl">We provide International Qualityfull Service ,we mean our parts!! Our Parts is most unique and most cool.Don't let come in our stoke and Enjoy our great Parts Service</p>
                    <button class="btn btn-primary">Explore Now!!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;