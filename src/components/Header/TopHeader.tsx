import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../Modals/LoginModal';
import Modal from '../Portal/Modal';
import { CiUser } from 'react-icons/ci';
import { IoExitOutline } from 'react-icons/io5';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentUser, logout } from '../../features/user/userSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';

function TopHeader() {
    const { user } = useSelector((state: any) => state.user);
    const [visible, setVisible] = useState(false);

    const { token } = useSelector((state: any) => state.user);

    const dispath = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        if (token) {
            dispath(getCurrentUser());
        }
    }, [token]);

    const handleLogout = () => {
        dispath(logout());
    };

    return (
        <div className="bg-grey_color py-[10px]">
            <div className="wrapper flex justify-between  text-[12px]">
                <div>
                    <span className="px-[12px]">Welcome to our Shop!</span>
                </div>
                <div className="flex gap-[10px] items-center">
                    {user ? (
                        <>
                            <Link
                                to="/account"
                                className="cursor-pointer hover:text-main_color flex items-center"
                            >
                                <span className="text-[18px] mr-[5px]">
                                    <CiUser />
                                </span>
                                <span>
                                    {user?.first_name} {user?.last_name}
                                </span>
                            </Link>
                            <span>-</span>
                            <Link
                                to="/wishlist"
                                className="cursor-pointer hover:text-main_color flex items-center"
                                onClick={handleLogout}
                            >
                                <span className="text-[18px] mr-[5px]">
                                    <IoExitOutline />
                                </span>
                                <span>Logout</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/wishlist"
                                className="cursor-pointer hover:text-main_color"
                            >
                                My Wishlist
                            </Link>
                            <span
                                className="cursor-pointer hover:text-main_color"
                                onClick={() => setVisible(true)}
                            >
                                Account
                            </span>
                        </>
                    )}
                    <Modal visible={visible} setVisible={setVisible}>
                        <LoginModal setVisible={setVisible} />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
