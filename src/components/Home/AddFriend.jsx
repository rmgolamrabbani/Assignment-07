export default function AddFriend() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-4xl mx-auto text-center">
        

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Friends to keep close in your life
        </h1>

  
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>


        <div className="mt-6">
          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-md text-sm sm:text-base transition duration-300">
            + Add a Friend
          </button>
        </div>

      </div>
    </section>
  );
}
