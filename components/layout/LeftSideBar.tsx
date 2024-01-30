import Image from 'next/image';
import instagram from '../../public/assets/Instagram.svg';
import avatarDefault from '../../public/assets/images.jpg';
import insIcon from '../../public/assets/instagram-icon.svg';
import logOut from '../../public/assets/log-out-1-svgrepo-com.svg';
import Menu from './Menu';
import { SignOutButton, UserButton } from '@clerk/nextjs';

const LeftSideBar = () => {
    return (
        <div className="sticky top-0 left-0 h-screen w-[280px] px-6 flex flex-col items-center border-r-[1px] border-solid border-[#ffffff61] transition-all">
            <div className="flex flex-row pb-2 items-center">
                <Image src={insIcon} alt="ins-icon" width={45} height={45} />

                <Image
                    src={instagram}
                    alt="instagram-text-white"
                    width={150}
                    height={150}
                    className="bg-black"
                />
            </div>

            <div className="flex flex-col gap-3 items-center w-[100%]">
                <div className="flex flex-col items-center">
                    <Image
                        src={avatarDefault}
                        alt="avatar-default"
                        width={50}
                        height={50}
                        className="rounded-[100%] object-cover"
                    />
                    <p className="text-white text-lg font-semibold">
                        Nguyen Hau
                    </p>
                </div>

                <div className="flex flex-row justify-between w-[100%]">
                    <div className="flex flex-col items-center">
                        <p className="font-normal">1</p>
                        <p className="font-medium">Posts</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-normal">2</p>
                        <p className="font-medium">Followers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-normal">3</p>
                        <p className="font-medium">Following</p>
                    </div>
                </div>
            </div>

            <div className="bg-white w-[100%] h-[2px] my-4"></div>

            <hr />

            <Menu />

            <hr />

            <div className="bg-white w-[100%] h-[2px] my-4"></div>

            <div>
                <div className="flex flex-row items-center gap-4 mt-3">
                    <UserButton afterSignOutUrl="/sign-in" />
                    <p>Manage Account</p>
                </div>

                <SignOutButton>
                    <div
                        className="flex flex-row items-center gap-4 mt-6
                    "
                    >
                        <Image
                            src={logOut}
                            alt="logOut-icon"
                            width={30}
                            height={30}
                        />
                        <button>Log Out</button>
                    </div>
                </SignOutButton>
            </div>
        </div>
    );
};

export default LeftSideBar;
