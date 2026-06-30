import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/hero.png";

export const Hero = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-14
      py-8
      "
    >
      {/* Left Section */}
      <div className="max-w-xl">

        <span className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/40">
          🚀 India's Smartest eBook Platform
        </span>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">

          <span className="text-slate-900 dark:text-white">
            Learn.
          </span>

          <span className="text-blue-600 dark:text-blue-400">
            {" "}Build.
          </span>

          <br />

          <span className="text-slate-900 dark:text-white">
            Become a
          </span>

          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Better Developer.
          </span>

        </h1>

        <p className="text-lg lg:text-xl mt-7 leading-9 text-slate-600 dark:text-slate-300">
          Master React, JavaScript, Python, AI, Data Science,
          Cloud Computing and more with carefully selected
          programming eBooks loved by thousands of developers.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            📚 Explore Library
          </Link>

          <Link
            to="/register"
            className="border border-slate-300 dark:border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Join Free
          </Link>

        </div>

        {/* Stats */}

        <div className="flex gap-10 mt-12 flex-wrap">

          <div>
            <h2 className="text-4xl font-bold text-blue-500">15+</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Premium Books
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-green-500">100%</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Digital Access
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-yellow-500">24/7</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Cloud Library
            </p>
          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="relative flex justify-center items-center lg:w-1/2">

        {/* Background Glow */}

        <div className="absolute w-[450px] h-[450px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        {/* Top Floating Card */}

        <div className="absolute top-6 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-5 py-3">
          <p className="text-sm font-semibold text-yellow-500">
            ⭐ Rated 4.9 / 5
          </p>
        </div>

        {/* Image */}

        <div
          className="
          relative
          rounded-3xl
          overflow-hidden
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-[0_25px_70px_rgba(37,99,235,0.20)]
          p-4
          transition-all
          duration-500
          hover:scale-[1.03]
          hover:-translate-y-2
          z-10
        "
        >
          <img
            src={HeroImage}
            alt="CodeBook Hero Section"
            className="rounded-2xl w-full max-w-[650px]"
          />
        </div>

        {/* Bottom Left Card */}

        <div className="absolute bottom-5 left-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-5 py-3">
          <h3 className="text-2xl font-bold text-blue-600">15+</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Programming Books
          </p>
        </div>

        {/* Bottom Right Card */}

        <div className="absolute bottom-5 right-0 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-5 py-3">
          <h3 className="text-2xl font-bold text-green-500">24/7</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Lifetime Access
          </p>
        </div>

      </div>

    </section>
  );
};