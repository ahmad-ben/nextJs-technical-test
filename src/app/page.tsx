import Link from "next/link";
import depressionIcon from "../../public/icons/depression.svg";
import tableSittingIcon from "../../public/icons/friends-table-hangouts.svg";
import blueWave from "../../public/icons/blue-wave.svg";
import greenWave from "../../public/icons/green-wave.svg";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="homePageCom">
      <header>
        <nav className="flex justify-end p-3">
          <ul className="linksList flex items-center gap-5">
            <li>
              <button>
                <Link href='/about'>About Us</Link>
              </button>
            </li>
            <li>
              <button className="signInButton border border-white px-4 py-1 rounded-full">
                <Link href='/signIn'>Sign In</Link>
              </button>
            </li>
            <li>
              <button className="signUpButton bg-secondary px-4 py-1 rounded-full">
                <Link href='/signUp'>Sign Up</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="articles py-12">

        <article className="article relative px-5 mb-6">
          <header className="articleHeader flex gap-4">
            <div className="definition flex-1">
              <h1 className="text-6xl mb-4">What is Mental Health?</h1>
              <p className="mr-5 text-xl leading-9">
                Mental health encompasses the overall well- being of an 
                individual's emotional and psychological state. In South Africa,
                mental health disorders are prevalent, with the South African 
                Stress and Health (SASH) study reporting that around 30% of the 
                population will experience a mental disorder in their lifetime.
              </p>
            </div>
            <Image src={depressionIcon} alt="Depression Icon" className="flex-1" />
          </header>
          <p className="leading-9">
            Additionally, the South African Depression and Anxiety Group 
            (SADAG) estimates that approximately 1 in 6 South Africans suffer 
            from anxiety, depression, or substance abuse disorders. The suicide
            rate in South Africa, according to the World Health Organization 
            (WHO) data for 2016, was approximately 13.8 per 100,000 population.
          </p>
          <p className="leading-9">
            Unfortunately, mental health stigma persists, as highlighted by a 
            study conducted by the Human Sciences Research Council (HSRC) in 
            2008, revealing that 78% of South Africans believe individuals with
            mental health problems are unfit for work. Access to mental health 
            services remains a challenge, with the SASH study indicating that 
            only 15% of South Africans with a mental health disorder received 
            treatment in the year preceding the study. Socioeconomic factors 
            such as financial stress and unemployment significantly contribute 
            to mental health problems in the country, according to the South 
            African Depression and Anxiety Group (SADAG).
          </p>
          <Image 
            src={blueWave} alt="Blue Wave Icon" 
            className="wave absolute top-full left-0 z-10" 
          />
        </article>

        <article className="article relative px-10 py-12 greenArticle">
          <h2 className="text-5xl mb-7">Handling Mental Health</h2>
          <div className="articleContent flex items-center gap-5">
            <Image src={tableSittingIcon} alt="table sitting Icon" className="flex-1" />
            <article className="flex-1">
              <h3 className="mb-5">How can I help myself?</h3>
              <ul>
                <li>i. Try to be active and exercise.</li>
                <li>ii. Break large tasks into small ones.</li>
                <li>iv. Spend time with friends and family.</li>
                <li>iii. Set priorities.</li>
              </ul>
            </article>
          </div>
          <Image src={greenWave} alt="Green Wave Icon" className="flex-1" />
        </article>

      </div>
    </main>
  );
}



// TODO: Add the main container for responsibility
// TODO: If li > button > a is to much or not comparing to li > a for a button function
// TODO: The proper alt expression for each icon