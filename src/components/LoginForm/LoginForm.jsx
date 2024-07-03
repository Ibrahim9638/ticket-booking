import React from "react";
import login from "../../assets/login.png";

const LoginForm = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="col-span-2 ">
        <h2 className="mt-4 mb-4 text-center text-3xl font-bold">Please Login here</h2>
        <div>
        <b>Name:</b> <input
            type="text"
            placeholder="Type your Name"
            className="input input-bordered w-full mb-4"
          />
        </div>
        <div>
        <b>Email:</b> <input
            type="email"
            placeholder="Type your Email"
            className="input input-bordered w-full  mb-4"
          />
        </div>
        <div>
        <textarea className="textarea textarea-bordered w-full h-28 mb-4" placeholder="Type your Message"></textarea>
        </div>
        <div className="w-[20%] mx-auto">
            <button className="btn btn-primary  text-center font-bold">Send Message</button>
        </div>
      </div>
      <div>
        <img src={login} alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
