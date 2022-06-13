import React from 'react';

const signIn = () => {
	return (
		<div className="w-full flex flex-col ">
			<label className="flex items-center justify-center relative">
				<input
					type="text"
					className="border-1 border-gray-300 outline-none rounded-md w-full h-12 cursor-text focus:border-blue-500 text-xl"
				/>
				<div className="absolute left-6 text-xl text-gray-600 input-text">
					<span className="font-extralight">Email or phone</span>
				</div>
			</label>
			<span className="text-left text-blue-500 font-medium pt-4 text-lg">
				Forgot email?
			</span>
			<p className="text-left pt-16 sm:pt-6 text-base text-gray-600">
				Not your Computer? Use Guest mode to sign in privately.{' '}
				<span className="text-blue-600">Learn more</span>
			</p>
			<div className="flex items-center justify-between pt-12 pb-12">
				<p className="cursor-pointer text-blue-600 text-base ">
					Create account
				</p>
				<button className="bg-blue-500 px-6 py-2 text-white rounded-md font-bold">
					Next
				</button>
			</div>
		</div>
	);
};

export default signIn;
