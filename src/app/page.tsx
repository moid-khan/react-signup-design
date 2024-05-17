import { SignUpForm } from "@/components/signup/signup-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex-col grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-purple-100 p-5 hidden lg:flex flex-col items-center">
        <div className="self-start pl-16">
          <Image src="/static/images/logo.png" alt="Logo" width={30} height={60} />
        </div>

        <div className="flex flex-col items-center justify-center w-3/4 text-center mt-28">
          <Image src="/static/images/signup_image.png" alt="SignUp" width={300} height={300} />
          <h1 className="text-4xl font-medium mt-5">Royalty collections, simplified. It’s next level!</h1>
          <p className="w-2/3 mt-3">Revenue based invoice collection to make royalty collection as easy as...</p>
        </div>
      </div>
      <div className="bg-slate-100 py-5 px-16 w-full lg:w-auto">
        <div className="flex justify-between lg:justify-end">
          <Image src="/static/images/logo.png" className="lg:hidden" alt="Logo" width={30} height={60} />
          <Button variant="ghost" className="gap-2 px-0">
            Log in
            <Image src="/static/images/arrow_icon.png" alt="Arrow Icon" width={7} height={7} />
          </Button>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="mb-5">
            <h1 className="text-2xl md:text-3xl font-medium mt-5">Get started with Franchain</h1>
            <p className="w-2/3 mt-3">Create an account in 5 minutes.</p>
          </div>
          <SignUpForm />
          <p className="mt-12 text-xs">By clicking “Start Application“, I agree to Mercury&apos;s <Link href="#" className="underline">Terms of Use</Link>, <Link href="#" className="underline">Privacy Policy</Link> and to receive electronic communication about my accounts and services per <Link href="#" className="underline">Mercury&apos;s Electronic Communications Agreement</Link>, and acknowledge receipt of <Link href="#" className="underline">Mercur&apos;s USA PATRIOT Act disclosure.</Link></p>
        </div>
      </div>
    </main>
  );
}
