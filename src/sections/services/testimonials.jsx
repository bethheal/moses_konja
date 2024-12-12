import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 8,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 24,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");
    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());
    keenSliderPreviousDesktop?.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop?.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-50 px-4 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Don't just take our word for it
            </h2>
            <p className="mt-4 text-gray-700">
              Hear from smallholder farmers who have benefited from our
              sustainable agricultural solutions.
            </p>

            <div className="hidden lg:flex gap-4 mt-8">
              <button
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                id="keen-slider-next-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex flex-col justify-between bg-white p-6 shadow-md sm:p-8 rounded-lg">
                  <div>
                    <div className="flex text-green-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      Transforming Lives
                    </p>
                    <p className="mt-2 text-gray-700">
                      The training and hybrid seedlings have revolutionized our
                      practices, leading to a 70% yield increase.
                    </p>
                  </div>
                  <footer className="mt-6 text-sm text-gray-500">
                    &mdash; John Doe, Smallholder Farmer
                  </footer>
                </blockquote>
              </div>
              <div id="keen-slider" className="keen-slider p-4">
                <div className="keen-slider__slide flex items-center justify-center">
                  <blockquote className="flex flex-col justify-between bg-white p-4 shadow sm:p-6">
                    <p className="text-lg sm:text-base text-gray-800">
                      The services have been a game-changer for us. We now have
                      access to high-quality inputs and valuable advice on
                      improving our yield. It's made a significant impact on our
                      community's success.
                    </p>
                    <footer className="mt-2 text-sm text-gray-600">
                      &mdash; Peter Wangari, Smallholder Farmer
                    </footer>
                  </blockquote>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
