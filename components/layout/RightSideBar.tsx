import Image from 'next/image';
import avaDefault from '../../public/assets/images.jpg';

const RightSideBar = () => {
    return (
        <div className="sticky right-0 top-0 h-screen ml-auto mr-36 w-[300px] px-5">
            <div className="flex flex-row items-center gap-3 mt-10">
                <p className="text-[#A8A8A8] text-xl font-bold">
                    Suggested for you
                </p>
                <p className="text-[#F5F5F5] text-sm font-medium ml-auto">
                    See All
                </p>
            </div>
            <div className="flex flex-row mt-4">
                <Image
                    src={avaDefault}
                    alt="ava-default"
                    width={50}
                    height={50}
                    className="rounded-[100%]"
                />

                <div className="flex flex-col ml-2">
                    <p className="text-lg font-bold">n_jelli</p>
                    <p className="text-sm font-medium text-[#616161]">
                        Suggested for you
                    </p>
                </div>

                <button className="text-[#0084da] text-sm ml-auto">
                    Follow
                </button>
            </div>
            <div className="flex flex-row mt-4">
                <Image
                    src={avaDefault}
                    alt="ava-default"
                    width={50}
                    height={50}
                    className="rounded-[100%]"
                />

                <div className="flex flex-col ml-2">
                    <p className="text-lg font-bold">n_jelli</p>
                    <p className="text-sm font-medium text-[#616161]">
                        Suggested for you
                    </p>
                </div>

                <button className="text-[#0084da] text-sm ml-auto">
                    Follow
                </button>
            </div>
            <div className="flex flex-row mt-4">
                <Image
                    src={avaDefault}
                    alt="ava-default"
                    width={50}
                    height={50}
                    className="rounded-[100%]"
                />

                <div className="flex flex-col ml-2">
                    <p className="text-lg font-bold">n_jelli</p>
                    <p className="text-sm font-medium text-[#616161]">
                        Suggested for you
                    </p>
                </div>

                <button className="text-[#0084da] text-sm ml-auto">
                    Follow
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;
