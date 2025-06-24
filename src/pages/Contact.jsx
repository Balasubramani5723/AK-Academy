const Contact = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Contact Us</h1>
    <form className="mt-4 flex flex-col gap-2 max-w-md">
      <input type="text" placeholder="Your Name" className="border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea placeholder="Your Message" className="border p-2 rounded" />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  </div>
);

export default Contact;
