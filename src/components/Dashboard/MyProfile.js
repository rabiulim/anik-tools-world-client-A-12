import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth)


    const handleUpdateProfile = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const education = e.target.education.value;
        const linkdin = e.target.linkdin.value;
        const location = e.target.location.value;
        const phoneNumber = e.target.phoneNumber.value;
        const profileImg = e.target.profileImg.value;

        const profileInfo = { name, education, linkdin, location, phoneNumber, profileImg }
        console.log(profileInfo)
    }

    return (
        <div class="card mx-auto w-96 min-h-50 bg-base-200 my-12 shadow-xl">
            <div class="card-body">
                <img src="https://media.istockphoto.com/photos/auto-parts-picture-id478107962?b=1&k=20&m=478107962&s=170667a&w=0&h=6RVCyc6ojG63MPSWxfrLMebr5kObIahjBzk-4WZb7SE=" alt="" />
                <h2 class="card-title text-center"> {(user.displayName === null) ? <p>Your Name Not Found</p> : user?.displayName}</h2>
                <form onSubmit={handleUpdateProfile}
                    className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <h1 className='text-xl'>Edit Now Your Info</h1>
                    <input type="text" name='name' placeholder='Enter Your name' className='input input-bordered input-primary w-full max-w-xs' required />
                    <input type="text" name='education' placeholder='Enter Your Education' className='input input-bordered input-primary w-full max-w-xs' required />
                    <input type="text" name='linkdin' placeholder='Enter Your linkdin Url' className='input input-bordered input-primary w-full max-w-xs' />
                    <input type="text" name='location' placeholder='Enter Your Location' className='input input-bordered input-primary w-full max-w-xs' required />
                    <input type="number" name='phoneNumber' placeholder=" Enter Phone Number " class="input input-bordered input-primary w-full max-w-xs" />

                    <input type="text" name='profileImg' placeholder='Enter Your Profile picture url' className='input input-bordered input-primary w-full max-w-xs' required />
                    <input type="submit" value="Save Change" className="btn btn-secondary w-full max-w-xs" />

                </form>
            </div>
        </div>
    );
};

export default MyProfile;