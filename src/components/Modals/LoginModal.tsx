import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../apis/services/userService';
import { useForm } from 'react-hook-form';
import Input from '../Inputs/Input';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken } from '../../features/user/userSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';

type Props = {
    setVisible?: any;
};

function LoginModal({ setVisible }: Props) {
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        if (isLogin) {
            login('/users/login', data)
                .then((res: any) => {
                    const { access_token, message } = res.data;
                    if (access_token) {
                        dispatch(setToken(access_token));
                        toast.success(message);
                        setVisible(false);
                    }
                })
                .catch((err) => {
                    toast.warn(err?.response?.data?.message);
                });
        } else {
            login('/users/register', data)
                .then((res: any) => {
                    const { message } = res.data;
                    setIsLogin(true);
                    toast.success(message);
                })
                .catch((err) => {
                    toast.warn(err?.response?.data?.message);
                });
        }
    };

    useEffect(() => {
        reset();
    }, [isLogin]);

    return (
        <div>
            <h3 className="uppercase mb-[20px] text-center text-[18px] font-[600]">
                {isLogin ? 'Login' : 'Create Account'}
            </h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[15px]"
            >
                {!isLogin && (
                    <>
                        <div>
                            <Input
                                placeholder="First Name"
                                register={register}
                                name="first_name"
                                validate={{
                                    required: 'First name is required!',
                                }}
                                errors={errors}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Last Name"
                                register={register}
                                name="last_name"
                                validate={{
                                    required: 'Last name is required!',
                                }}
                                errors={errors}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Phone"
                                register={register}
                                name="phone"
                                validate={{ required: 'Phone is required!' }}
                                errors={errors}
                            />
                        </div>
                    </>
                )}
                <div>
                    <Input
                        placeholder="Email"
                        register={register}
                        name="email"
                        validate={{ required: 'Email is required!' }}
                        errors={errors}
                    />
                </div>
                <div>
                    <Input
                        placeholder="Password"
                        register={register}
                        name="password"
                        type="password"
                        validate={{ required: 'Password is required!' }}
                        errors={errors}
                    />
                </div>
                <button
                    type="submit"
                    className="uppercase font-[600] cursor-pointer bg-main_color px-[11px] py-[15px] text-white text-center mb-[15px]"
                >
                    {isLogin ? 'Sign In' : 'Create'}
                </button>
                {isLogin ? (
                    <>
                        <div className="flex justify-between">
                            <Link className="hover:text-main_color" to={''}>
                                Forgot your password?
                            </Link>
                            <span
                                className="hover:text-main_color cursor-pointer"
                                onClick={() => setIsLogin(false)}
                            >
                                Create Account
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text-center">
                            <span
                                className="uppercase font-[400] cursor-pointer bg-main_color px-[11px] py-[15px] text-white text-center"
                                onClick={() => setIsLogin(true)}
                            >
                                Cancel
                            </span>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default LoginModal;
