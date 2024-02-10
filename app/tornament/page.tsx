const  TournamentRegis = () => {
    return(
        <>
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-lg bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Host Tournament
              </h2>
              <form>
                <div className="-mx-4 flex flex-wrap mt-20">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tournament Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your Tournament name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="games"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Select Game
                      </label>
                      <select 
                        name="games"
                        id="games"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                     >
                      <option value={null}>Select Game</option>
                      <option value="1">PUBG</option>
                      <option value="2">VALORUNT</option>
                      <option value="3">COUNTER STRIKE</option>
                      <option value="4">POKEMAN GO</option>
                     </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="poster"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                      Tournament Poster
                      </label>
                      <input
                        type="file"
                        name="poster"
                        id="poster"
                        placeholder="Select Your Tournament Poster"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="description"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Tournament Description
                      </label>
                      <textarea
                        name="description"
                        rows={5}
                        placeholder="Enter Tornament Description"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="rules"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Tournament Rules
                      </label>
                      <textarea
                        name="rules"
                        rows={5}
                        placeholder="Enter Tornament Rules"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="start-date"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Select Start Date and Time
                      </label>
                      <input
                        type="datetime-local"
                        name="start-date"
                        id="start-date"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                     />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="end-date"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Select End Date and Time
                      </label>
                      <input
                        type="datetime-local"
                        name="end-date"
                        id="end-date"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                     />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-lg bg-blue-700 px-9 py-2 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Host
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default TournamentRegis