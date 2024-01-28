import Link from "next/link";
import depressionIcon from "../../public/icons/depression.svg";
import tableSittingIcon from "../../public/icons/friends-table-hangouts.svg";
import underTreeSittingIcon from "../../public/icons/friends-under-tree-hangouts.svg";
import upGreenWave from "../../public/icons/up-green-wave.svg";
import downGreenWave from "../../public/icons/down-green-wave.svg";
import Image from "next/image";
import { helpOthersTipsList, helpSelfTipsList } from "../utils/staticTextData";
import { LinkInfoInt } from "@/interfaces";
import { link } from "fs";

export default function HomePage() {
  /* ===== variables ===== */
  const linksListInfo: LinkInfoInt[] = [
    {
      linkPath: 'about',
      linkText: 'About Us'
    },
    {
      linkPath: 'signIn',
      linkText: 'Sign In',
      linkClasses: 'border border-white px-4 py-1 rounded-full'
    },
    {
      linkPath: 'signUp',
      linkText: 'Sign Up',
      linkClasses: 'bg-secondary px-4 py-1 rounded-full'
    }
  ] 

  /* ===== Renders ===== */
  const renderNavLinksList = () => 
    linksListInfo.map( ({linkPath, linkText, linkClasses}) => 
      <li key={linkPath} className={linkClasses ? linkClasses : ''} >
        <Link href={`/${linkPath}`}>{linkText}</Link>
      </li>  
    )
  const renderHelpSelfTipsList = () => 
    helpSelfTipsList.map( tip => <li key={tip} className="mb-4">{tip}</li> )
  const renderHelpOthersTipsList = () => 
    helpOthersTipsList.map( tip => <li key={tip} className="mb-4">{tip}</li> )

  return (
    <div className="homePageCom">
      <header>
        <nav className="flex justify-end p-3 text-lg">
          <ul className="linksList flex items-center gap-5">
            {renderNavLinksList()}
          </ul>
        </nav>
      </header>

      <div className="articles py-12">

        <article className="article relative px-5 mb-32">
          <header className="articleHeader flex gap-4 mb-10">
            <div className="definition flex-1">
              <h1 className="text-6xl mb-8">What is Mental Health?</h1>
              <p className="mr-5 text-lg leading-9">
                Mental health encompasses the overall well- being of an 
                individual's emotional and psychological state. In South Africa,
                mental health disorders are prevalent, with the South African 
                Stress and Health (SASH) study reporting that around 30% of the 
                population will experience a mental disorder in their lifetime.
              </p>
            </div>
            <Image src={depressionIcon} alt="Depression Icon" className="flex-1" />
          </header>
          <p className="leading-9 text-lg">
            Additionally, the South African Depression and Anxiety Group 
            (SADAG) estimates that approximately 1 in 6 South Africans suffer 
            from anxiety, depression, or substance abuse disorders. The suicide
            rate in South Africa, according to the World Health Organization 
            (WHO) data for 2016, was approximately 13.8 per 100,000 population.
          </p>
          <p className="leading-9 text-lg">
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
        </article>

        <article className="largeGreenBackground article relative px-20">
          <Image 
            src={upGreenWave} alt="Green Wave Icon" 
            className="wave absolute bottom-full"
          />
          <h2 className="text-5xl mb-16">Handling Mental Health</h2>
          <div className="articleContent flex items-center gap-20">
            <Image 
              src={tableSittingIcon} alt="table sitting Icon" 
              className="flex-1" 
            />
            <article className="flex-1">
              <h3 className="text-4xl mb-7">How can I help myself?</h3>
              <ul className="list-lower-roman text-xl ml-8">
                {renderHelpSelfTipsList()}
              </ul>
            </article>
          </div>
          <Image 
            src={downGreenWave} alt="Green Wave Icon" 
            className="wave absolute top-full"
          />
        </article>

        <article className="article flex items-center gap-5 px-10 mt-32 mb-20">
          <article className="flex-1">
            <h3 className="text-4xl mb-7">How can I help others?</h3>
            <ul className="list-lower-roman text-xl ml-8">
              {renderHelpOthersTipsList()}
            </ul>
          </article>
          <Image 
            src={underTreeSittingIcon} alt="under tree sitting Icon" 
            className="flex-1" 
          />
        </article>

      </div>
    </div>
  );
}



// TODO: Add the main container for responsibility
// TODO: If li > button > a is to much or not comparing to li > a for a button function
// TODO: The proper alt expression for each icon
// TODO: Care about font size
// TODO: Website or any other tool that helps me to check the structure of my HTMl markup

