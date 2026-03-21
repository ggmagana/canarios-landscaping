export default function Contact({ t }) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">{t("contact")}</h2>
  
        <form className="max-w-md mx-auto mt-6 space-y-4">
          <input className="w-full p-2 border" placeholder="Name" />
          <input className="w-full p-2 border" placeholder="Phone" />
          <textarea className="w-full p-2 border" placeholder="Message"></textarea>
  
          <button className="bg-green-700 text-white px-4 py-2">
            Submit
          </button>
        </form>
      </section>
    );
  }