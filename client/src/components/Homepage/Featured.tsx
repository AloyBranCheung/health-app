import React from "react";

export default function Featured() {
  return (
    <section className="body-font text-mainFontColor bg-mainColor">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 ">
            convallis aenean et tortor
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            eros in cursus turpis massa tincidunt dui ut.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-full md:w-1/2 p-4">
            <div className="flex relative">
              <a className="relative block w-full bg-black group" href="">
                <img
                  className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                  src="https://picsum.photos/1920/1080?random=1"
                  alt=""
                />
                <div className="relative p-8">
                  <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    senectus
                  </p>

                  <p className="text-2xl font-bold text-white">
                    tempor id eu nisl
                  </p>

                  <div className="mt-64">
                    <div className="sm:transition-all sm:transform sm:translate-y-8 sm:opacity-0  sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2 p-4">
            <div className="flex relative">
              <a className="relative block bg-black group" href="">
                <img
                  className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                  src="https://picsum.photos/1920/1080?random=2"
                  alt=""
                />
                <div className="relative p-8">
                  <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    senectus
                  </p>

                  <p className="text-2xl font-bold text-white">
                    tempor id eu nisl
                  </p>

                  <div className="mt-64">
                    <div className="sm:transition-all sm:transform sm:translate-y-8 sm:opacity-0  sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-full p-4">
            <div className="flex relative">
              <a className="relative block bg-black group" href="">
                <img
                  className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                  src="https://picsum.photos/1920/1080?random=3"
                  alt=""
                />
                <div className="relative p-8">
                  <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                    senectus
                  </p>

                  <p className="text-2xl font-bold text-white">
                    tempor id eu nisl
                  </p>

                  <div className="mt-64">
                    <div className="sm:transition-all sm:transform sm:translate-y-8 sm:opacity-0  sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
