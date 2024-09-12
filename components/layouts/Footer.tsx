import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pb-4 px-8">
    <section className="max-w-7xl mx-auto mt-32 bg-lightBlue mb-16 rounded-xl">
        <div className="max-w-4xl m-auto flex justify-between pt-16 pb-20 text-textBlack">
            <div>
                <Image src="/images/logo2.png" className="mb-3" alt='' width={100} height={41} />
                <h4 className="font-semibold text-[20px] mb-2">Experience Uplift</h4>
                <p className="text-[14px] max-w-[250px]">Everything you need to scale your NGO efficiently</p>
            </div>
            <div>
                <h4 className="font-semibold text-[20px] mb-3">Links</h4>
                <ul className="text-[14px] flex flex-col">
                    <a href="/" className="mb-2">Home</a>
                    <a href="/auth/register" className="mb-2">Register</a>
                    <a href="/login" className="mb-2">Login</a>
                    <a href="/ngo-and-projects" className="mb-2">NGO and Projects</a>
                    <a href="/find-matches" className="mb-2">Find Matches</a>
                    <a>Resources</a>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-[20px] mb-3">Contact</h4>
                <div>
                    <ul className="flex flex-col text-[14px]">
                        <a href="tel:+234-01-277-7700-9" className="mb-2">234-01-277-7700-9</a>
                        <a href="tel:+234-803-900-3700" className="mb-2">234-803-900-3700</a>
                        <a href="mailto:purpleconnect@wemabank.com" className="mb-2">purpleconnect@wemabank.com</a>
                        <li>54 Marina, Lagos Island, Lagos State, Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Footer