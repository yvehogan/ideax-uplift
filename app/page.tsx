import Hero from "@/components/content/Hero";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=1024" />
      </Head>
      {isMobile ? (
        <div className="mobile-warning">
          For the best experience, please visit this site on a desktop.
        </div>
      ) : (
        <main className="h-screen relative">
          <Hero />
          <div className="flex justify-center items-start -mt-52 gap-4">
            <Image
              src="/svgs/charts.svg"
              alt=""
              width={350}
              height={300}
              className="self-start object-contain -mr-12"
            />
            <div className="flex flex-col gap-2 relative mt-5 w-[600px]">
              <Image
                src="/svgs/amount.svg"
                alt=""
                width={500}
                height={300}
                className="w-full object-cove"
              />
              <Image
                src="/svgs/dashboard.svg"
                alt=""
                width={500}
                height={300}
                className="w-full object-cove -mt-[75px]"
              />
            </div>
            <Image
              src="/images/donation.png"
              alt=""
              width={250}
              height={300}
              className="self-start object-contain mt-[44px]"
            />
          </div>
          <div className="mt-16">
            <div className="max-w-4xl m-auto">
              <h2 className="font-semibold text-[40px] text-[#3B3B3B] text-center">
                Why Choose Uplift
              </h2>
              <p className="font-[500] text-[#696969] text-center">
                Our platform provides innovative tools that simplify financial
                management, enhance transparency, and foster meaningful
                connections with donors. Here&apos;s how UPLIFT can help your
                NGO thrive:
              </p>
            </div>
            <div className="flex justify-center gap-6 mt-16 pb-16">
              <div className="bg-[url('/svgs/reason1.svg')] bg-cover bg-center w-[352px] h-[406px] rounded-xl">
                <div className="text-white px-8 pt-8">
                  <h5 className="font-semibold text-[24px]">
                    Interest-Free Banking
                  </h5>
                  <p className="font-[500] mt-3">
                    Open and manage intrerst-free accounts with zero maintenance
                    fees, reducing operational costs for your NGO
                  </p>
                </div>
              </div>
              <div className="bg-[url('/svgs/reason2.svg')] bg-cover bg-center w-[352px] h-[406px] rounded-xl">
                <div className="text-white px-8 pt-8">
                  <h5 className="font-semibold text-[24px]">
                    Advanced Financial Analytics
                  </h5>
                  <p className="font-[500] mt-3">
                    Utilize cutting-edge analytics and reporting tools for
                    transparency in financial management
                  </p>
                </div>
              </div>
              <div className="bg-[url('/svgs/reason3.svg')] bg-cover bg-center w-[352px] h-[406px] rounded-xl">
                <div className="text-white px-8 pt-8">
                  <h5 className="font-semibold text-[24px]">
                    Donor-NGO Matching
                  </h5>
                  <p className="font-[500] mt-3">
                    Connect with donors who share your mission and goals through
                    our intelligent matching system
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="max-w-3xl m-auto">
              <h2 className="font-semibold text-[40px] text-textBlack text-center">
                Discover Our Impact
              </h2>
              <p className="font-[500] text-[#696969] text-center">
                Explore the work of our registered NGOs. Learn about their
                missions, and discover the projects they are working on.
              </p>
            </div>
            <div className="max-w-7xl m-auto relative px-5">
              <div className="bg-[url('/images/discover.png')] bg-cover bg-center h-screen mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-textBlack text-[16px] font-semibold absolute bottom-40 left-1/2 transform -translate-x-1/2 hover:bg-primary hover:opacity-70"
                >
                  <Link href="/find-matches">Browse NGOs</Link>
                </Button>
              </div>
            </div>
            <div className="max-w-7xl px-5 m-auto relative pb-16">
              <div className="bg-[url('/images/discover-group.png')] bg-cover bg-center h-[450px] mt-10 rounded-xl flex">
                <div className="px-12 flex flex-col justify-center">
                  <h5 className="text-primary font-bold text-[20px]">
                    For Donors
                  </h5>
                  <h2 className="text-[40px] font-semibold text-white py-2">
                    Find a Matching NGO
                  </h2>
                  <p className="font-[500] text-white max-w-[483px]">
                    Use our comprehensive matching tool to discover NGOs that
                    resonate with your personal values and passions. Our
                    platform connects you with organizations where your
                    contributions can make a significant difference.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-textBlack text-[16px] w-44 mt-10 font-semibold hover:bg-primary hover:opacity-70"
                  >
                    <Link href="/find-matches">Find Matches</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
