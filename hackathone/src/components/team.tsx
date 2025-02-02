import Image from "next/image";

export default function Team() {
  return (
    <div className="font-[sans-serif] bg-gradient-to-tr from-orange-200 via-orange-100 to-orange-200 p-6">
      <div className="max-w-5xl max-md:max-w-xl mx-auto">
        <h2 className="text-3xl text-center font-extrabold">Meet Our Professional Team</h2>

        <div className="grid md:grid-cols-2 gap-8 max-sm:justify-center text-center mt-16">
          <div>
            <Image
              src="/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
              alt="John Doe, Software Engineer"
              className="w-[160px] h-40 rounded-full inline-block"
              width={160}  // Custom width
              height={160}  // Custom height
            />
            <div className="bg-white p-4 rounded-lg relative -mt-6">
              <h4 className="text-gray-800 text-lg font-bold">John Doe</h4>
              <p className="text-sm text-gray-800 mt-1">Software Engineer</p>
              <p className="mt-4 text-gray-600 text-sm">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
            </div>
          </div>

          <div>
            <Image
              src="/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
              alt="Mark Adair, Software Engineer"
              className="w-[160px] h-40 rounded-full inline-block"
              width={160}  // Custom width
              height={160}  // Custom height
            />
            <div className="bg-white p-4 rounded-lg relative -mt-6">
              <h4 className="text-gray-800 text-lg font-bold">Mark Adair</h4>
              <p className="text-sm text-gray-800 mt-1">Software Engineer</p>
              <p className="mt-4 text-gray-600 text-sm">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
            </div>
          </div>

          <div>
            <Image
              src="/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
              alt="Simon Konecki, Web Designer"
              className="w-[160px] h-40 rounded-full inline-block"
              width={160}  // Custom width
              height={160}  // Custom height
            />
            <div className="bg-white p-4 rounded-lg relative -mt-6">
              <h4 className="text-gray-800 text-lg font-bold">Simon Konecki</h4>
              <p className="text-sm text-gray-800 mt-1">Web Designer</p>
              <p className="mt-4 text-gray-600 text-sm">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
            </div>
          </div>

          <div>
            <Image
              src="/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
              alt="Eleanor, Web Designer"
              className="w-[160px] h-40 rounded-full inline-block"
              width={160}  // Custom width
              height={160}  // Custom height
            />
            <div className="bg-white p-4 rounded-lg relative -mt-6">
              <h4 className="text-gray-800 text-lg font-bold">Eleanor</h4>
              <p className="text-sm text-gray-800 mt-1">Web Designer</p>
              <p className="mt-4 text-gray-600 text-sm">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
