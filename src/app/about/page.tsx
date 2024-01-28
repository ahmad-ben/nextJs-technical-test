import Link from "next/link";
import Image from "next/image";
import { LinkInfoInt } from "@/interfaces";
import upGreenWave from "../../../public/icons/up-green-wave.svg";
import downGreenWave from "../../../public/icons/down-green-wave.svg";

export default function AboutPage() {
  /* ===== variables ===== */
  const linksListInfo: LinkInfoInt[] = [
    {
      linkPath: 'home',
      linkText: 'Home'
    },
    {
      linkPath: 'about',
      linkText: 'About Us',
    },
    {
      linkPath: 'contact',
      linkText: 'Contact Us',
    }
  ] 

  /* ===== Renders ===== */
  const renderNavLinksList = () => 
    linksListInfo.map( ({linkPath, linkText}) => 
      <li key={linkPath} className="" >
        <Link href={`/${linkPath}`}>{linkText}</Link>
      </li>  
    )

  return (
    <div className="aboutPageCom">

      <header className="mx-52 mb-32">
        <nav className="flex justify-end p-3 text-lg">
          <ul className="linksList flex items-center gap-8">
            {renderNavLinksList()}
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <section className="relative largeGreenBackground ps-3 me-48 flex gap-10 items-center">
            <Image 
              src={upGreenWave} alt="Green Wave Icon" 
              className="wave absolute bottom-full"
            />
            <h3 className="text-7xl w-fit">Who are we?</h3>
            <p className="text-2xl">
              At Test, we are a mental health services provider dedicated to 
              supporting individuals during challenging times. Founded in 2021,
              in the wake of the post- COVID-19 pandemic, we recognized the 
              increasing prevalence of depression and the importance of 
              accessible mental health care. We are committed to offering 
              convenient and personalized services in the comfort of your home.
            </p>
            <Image 
              src="/icons/character-2.svg" alt="Sitting person"
              width={190} height={400}
              className="absolute left-full top-1/4 z-10"
            />
            <Image 
              src={downGreenWave} alt="Green Wave Icon" 
              className="wave absolute top-full"
            />
          </section>
          <div className="my-32 text-xl">
            <p className="mb-10 me-48">
              Our mission is to empower individuals to prioritize their mental 
              well-being by providing accessible and high-quality mental health
              services. We envision a world where everyone has the opportunity 
              to achieve mental wellness and lead fulfilling lives.
            </p>
            <p>
              Test offers a comprehensive suite of mental health services 
              tailored to meet your individual needs. Our team of experienced 
              and compassionate mental health professionals provides therapy, 
              counseling, and support for a variety of concerns, including 
              depression, anxiety, and substance abuse. We combine 
              evidence-based practices with a client-centered approach to 
              ensure personalized care that promotes growth, healing, and 
              resilience.
            </p>
            <div className="flex items-center">
              {/* <Image /> */}
              <div>
                <p className="mb-16">
                  Our team consists of licensed therapists and counselors who 
                  are passionate about mental health and have extensive 
                  experience in their respective fields. They possess diverse 
                  backgrounds and specialized training in various therapeutic 
                  modalities. Our professionals are committed to providing a 
                  safe and supportive environment where you can explore your 
                  thoughts and emotions, and work towards positive change.
                </p>
                <p>
                  We understand the importance of privacy and confidentiality 
                  in the therapeutic process. At Bimo Health, we adhere to 
                  strict privacy standards and follow legal and ethical 
                  guidelines to safeguard your personal information. Your 
                  privacy is our utmost priority, ensuring a safe and 
                  confidential space for you to share and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section>
            {/* <Image /> */}
            <div>
              <h3></h3>
              <p></p>
            </div>
          </section>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <button>Show Less</button>
          </div>
        </div>
      </main>

    </div>
  );
}
