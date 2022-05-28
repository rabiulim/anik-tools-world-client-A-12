import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className='m-6'>
            <div class="hero min-h-50 bg-base-200 ">
                <div class="hero-content flex-col lg:flex-row-reverse w-50">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl text-primary font-bold">Do You have any Question?</h1>
                        <p class="py-12 text-xl">If you have any question or want need any info about us.Plz fill up the form and We will provide you answer .So let's do it!!</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter Your Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Description</span>
                                </label>
                                <input type="text" placeholder="Write Your Description" class="input input-bordered py-12" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;