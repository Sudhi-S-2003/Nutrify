import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className="max-w-[400px] m-auto p-6 bg-base-300 rounded mb-3">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <div className="space-y-4">
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Name</span>
          <input type="text" className="input input-bordered w-full" placeholder="Name" />
        </label>
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Username</span>
          <input type="text" className="input input-bordered w-full" placeholder="Username" />
        </label>
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Email</span>
          <input type="email" className="input input-bordered w-full" placeholder="example@gmail.com" />
        </label>
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Password</span>
          <input type="password" className="input input-bordered w-full" placeholder="******" />
        </label>
        <label className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <span className="text-sm w-full sm:w-1/3">Confirm Password</span>
          <input type="password" className="input input-bordered w-full" placeholder="******" />
        </label>
      </div>
      <button className="btn btn-success w-full mt-4">Sign Up</button>
      <div className="text-center mt-4">
        <p>Already have an account?</p>
        <Link to="/Login" className="text-blue-500 underline">
          Log In
        </Link>
      </div>

    </div>
  );
}

export default Signup;
