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

      <header className="mx-52 mb-24">
        <nav className="flex justify-end p-3 text-lg">
          <ul className="linksList flex items-center gap-8">
            {renderNavLinksList()}
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <section 
            className="introductionSection relative largeGreenBackground 
            ps-6 me-48 flex gap-10 items-center"
          >
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
          <div className="px-4 mt-36 mb-28 text-xl">
            <p className="mb-10 me-48">
              Our mission is to empower individuals to prioritize their mental 
              well-being by providing accessible and high-quality mental health
              services. We envision a world where everyone has the opportunity 
              to achieve mental wellness and lead fulfilling lives.
            </p>
            <p className="px-2 mb-3">
              Test offers a comprehensive suite of mental health services 
              tailored to meet your individual needs. Our team of experienced 
              and compassionate mental health professionals provides therapy, 
              counseling, and support for a variety of concerns, including 
              depression, anxiety, and substance abuse. We combine 
              evidence-based practices with a client-centered approach to 
              ensure personalized care that promotes growth, healing, and 
              resilience.
            </p>
            <div className="flex items-center px-2">
              <Image 
                src="/icons/character-3.svg" alt="Sitting person"
                width={175} height={400}
                className=""
              />
              <div>
                <p className="mb-12 leading-10">
                  Our team consists of licensed therapists and counselors who 
                  are passionate about mental health and have extensive 
                  experience in their respective fields. They possess diverse 
                  backgrounds and specialized training in various therapeutic 
                  modalities. Our professionals are committed to providing a 
                  safe and supportive environment where you can explore your 
                  thoughts and emotions, and work towards positive change.
                </p>
                <p className="leading-10">
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
          <section className="purposeSection relative largeGreenBackground ps-12 me-72">
            <Image 
              src={upGreenWave} alt="Green Wave Icon" 
              className="wave absolute bottom-full"
            />
            <h3 className="text-6xl mb-3">Our Purpose</h3>
            <p className="text-xl leading-10">
              At Bimo Health, our purpose is deeply rooted in our belief that
              solutions created to serve others, especially those who are 
              underserved, are always the best solutions. We are driven by 
              the commitment to make a positive impact on individuals' lives,
              ensuring that everyone has access to the mental health care 
              they deserve.
            </p>
            <Image 
              src="/icons/character-1.svg" alt="Standing women"
              width={200} height={100}
              className="absolute top-0 left-full z-10"
            />
            <Image 
              src={downGreenWave} alt="Green Wave Icon" 
              className="wave absolute top-full"
            />
          </section>
          <div className="text-lg leading-8 px-6 mt-48 mb-28">
            <p>
              We understand that seeking care for mental health concerns can be
              challenging, with various barriers that can prevent individuals 
              from receiving the support they need. That's why we are dedicated
              to removing those barriers and making mental health care more 
              accessible to all. Whether it's geographical limitations, 
              financial constraints, or stigmas surrounding mental health, we 
              strive to bridge the gaps and create a safe and inclusive space 
              where individuals can seek help without hesitation or obstacles.
            </p>
            <p>
              Equally important to us is easing the burdens for those 
              delivering care. We recognize the immense dedication and 
              compassion required from mental health professionals who work 
              tirelessly to support individuals on their journey to recovery.
              By leveraging technology and innovative solutions, we aim to 
              streamline and enhance the mental health care delivery process, 
              empowering our dedicated professionals to focus on what they do 
              best: helping individuals find their way back to themselves.
            </p>
            <p>
              We firmly believe that the right technology can transform lives. 
              By harnessing the power of digital tools, we can extend our reach
              and impact, ensuring that individuals can access mental health 
              resources anytime, anywhere. Whether through online counseling, 
              teletherapy options, or user-friendly platforms, we embrace 
              technology as a means to enhance the lives of people who are 
              seeking a way back to themselves.
            </p>
            <p>
              Our purpose is to create a harmonious connection between 
              compassionate care, cutting-edge technology, and the individuals
              we serve. We are driven by the conviction that everyone deserves
              the opportunity to prioritize their mental well-being and 
              discover a path to inner peace and fulfillment. At Bimo Health, 
              we are dedicated to making a meaningful difference in the lives 
              of those who need it most, one step at a time.
            </p>
            <button className="block ml-auto text-3xl mt-3 underline">
              Show Less
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}


// ?STOP In Girl chara







// TODO: Detect the most frequently font size weight line height... and add it as a global value
// TODO: Collect the important info and add them to the Gains failed
// TODO: Try as much as i can to find a solutions for the characters limits... in the design 
