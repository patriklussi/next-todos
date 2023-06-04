import Image from "next/image";
import Logo from "../../public/logoipsum-298.svg";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="min-h-screen  md:h-screen  justify-center items-center flex w-screen flex-wrap  ">
      <section className="hidden md:block h-full md:flex-1 bg-activeBlue flex flex-col "></section>
      <section className="h-full flex-1   ">
        <div className="h-fit md:mt-52">
          <Image
            className="mx-auto"
            width={48}
            height={48}
            src={Logo}
            alt="Logo"
          />
          <h1 className="text-2xl font-bold text-center my-4">Welcome back</h1>
          <p className="text-center my-2">
            Please log into your Workday account
          </p>
          <form className="p-4 max-w-2xl my-auto md:mx-auto ">
            <div>
              <label>Email</label>
              <input
                className="block w-full bg-neutral p-2 my-2 border-none outline-activeBlue"
                type="text"
                placeholder="email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
              placeholder="password"
                className="block w-full bg-neutral p-2 my-2 border-none outline-activeBlue"
                type="password"
              />
              <div className="flex justify-between my-2 ">
                <div>
                  <input className="cursor-pointer" type="checkbox" />
                  <label className="mx-2 text-sm">Remember me</label>{" "}
                </div>

                <Link
                  className="hover:text-activeBlue hover:underline text-sm"
                  href="#"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              className=" my-2 w-full md:w-content  transition-all bg-activeBlue py-2 px-4  hover:bg-mutedBlue "
              type="submit"
            >
              Log in!
            </button>
          </form>

          <h2 className="text-center my-4">
            Don&apos;t have an account yet?{" "}
            <Link className="text-activeBlue hover:underline " href="/register">
              Sign up!
            </Link>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
