'use client';


import DetailsForm from '@/components/detailsModel';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Navbar, NavbarContent, NavbarItem, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react';

const Home = () => {
  return (
    <div className='flex flex-col w-full'>{/* Container */}
      <Navbar position='sticky'>
        <NavbarContent>
          <Link href="#home" aria-current="page" color="secondary" className='p-4 grow justify-center hover:bg-[#e2caeb]'>
            Home
          </Link>
          <Link href="#skills" aria-current="page" color="secondary" className='p-4 grow justify-center hover:bg-[#e2caeb]'>
            Skills
          </Link>
          <Link href="https://drive.google.com/file/d/12jUSVDprEdmTXNjzUVBVgzpf7V6qCHn3/view?usp=sharing" target="_blank" aria-current="page" color="secondary" className='p-4 grow justify-center hover:bg-[#e2caeb]'>
            Resume
          </Link>
          <Link href="#my-work" aria-current="page" color="secondary" className='p-4 grow justify-center hover:bg-[#e2caeb]'>
            My Work
          </Link>
        </NavbarContent>
      </Navbar>
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center pr-2 ml-[-100px] hover:ml-[0px] hover:pl-[8px] text-white duration-300 bg-[#6389f1]">
            <a
              className="flex items-center justify-between w-full text-black-300"
              href="https://www.linkedin.com/in/kirthanaa07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <svg className="w-8 h-8 text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pr-2 ml-[-100px] hover:ml-[0px] hover:pl-[8px] text-white duration-300 bg-[#40444e]">
            <a
              className="flex items-center justify-between w-full text-black-300"
              href="https://github.com/Kirthanaa07"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <svg className="w-8 h-8 text-stone-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pr-2 ml-[-100px] hover:ml-[0px] hover:pl-[8px] text-white duration-300 bg-[#f35073]">
            <a
              className="flex items-center justify-between w-full text-black-300"
              href="https://github.com/Kirthanaa07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <svg className="w-8 h-8 text-neutral-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center pr-2 ml-[-100px] hover:ml-[0px] hover:pl-[8px] text-white duration-300 bg-[#3d6423]">
            <a
              className="flex items-center justify-between w-full text-black-300"
              href="https://github.com/Kirthanaa07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
              <svg className="w-8 h-8 text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col self-stretch justify-center w-full h-full p-8 grow">

        <div id="home" className="flex flex-col gap-4 min-h-screen p-8 mt-[-80px] pt-[80px]">
          <div className="w-full max-w-sm lg:max-w-full lg:flex">
            <div className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t profile-img lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" title="profile">
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
              <div className="mb-8">
                <div className="text-[#ce8ee7] font-bold text-xl mb-2">Hi, I am  Kirthana Sukumaran</div>
                <p className="mb-3 text-base italic text-gray-700">A full-stack software developer located in Nashville, TN.</p>
                <div className='text-base text-gray-700'>As a dedicated stay-at-home mom, I embarked on an inspiring journey to fulfill my passion for technology and software development. Armed with a Master of Computer Application (MCA) degree and having previously contributed two years as an Associate Engineer at Virtusa, I decided to pivot my career. My experience in production support equipped me with valuable problem-solving and technical skills, which I am now eager to leverage in the field of software development. This transition represents not only my commitment to personal and professional growth but also my unwavering dedication to providing the best opportunities for my family. With a foundation in engineering, a love for coding, and a strong work ethic, I am excited to embark on this new chapter as I strive to become a successful software developer.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-6">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Cred Track</p>
                <small className="text-default-500">Frontend Capstone</small>
              </CardHeader>
              <Image
                alt="Frontend Capstone"
                className="object-cover"
                src="/credTrack.jpg"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='My frontend capstone project, CredTrack, represents a significant milestone in my journey as a software developer. This innovative application, developed using React.js, JavaScript, HTML, CSS, and Bootstrap, addresses a critical need in the healthcare industry. CredTrack serves as a comprehensive physician credentialing solution that allows both the public and registered users to access physicians profiles and credentials. Users can seamlessly request to become a physician, initiating a process overseen by administrators.' tryIt='https://kirthana-frontendcapstone-credtrack.netlify.app/' gitHubLink='https://github.com/Kirthanaa07'>Details</DetailsForm>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Trials Track</p>
                <small className="text-default-500">Backend - Full-Stack Capstone</small>
              </CardHeader>
              <Image
                alt="BackEnd capstone"
                className="object-cover"
                src="/trialsTrack.jpg"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='My backend capstone project, marks a pivotal achievement in my software development journey, integrating React.js, Python with Django, SQL, NextUI, and Tailwind CSS. This innovative solution empowers administrators with robust CRUD capabilities for overseeing global trials and associated locations. Leveraging two external APIs – one for retrieving trials via NCT numbers and another for Google Maps integration displaying trial locations – enhances functionality. Meanwhile, researchers are restricted to accessing trials and locations they are associated with, ensuring data integrity. With its contemporary interface and secure architecture, Trials Track optimizes healthcare management, facilitating streamlined trial oversight and research progress.' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div id="skills" className="min-h-screen flex flex-row grow p-4 w-1/2 self-center justify-center items-center mt-[-80px] pt-[80px]">
          <div className='flex flex-row flex-wrap justify-between flex-1 gap-6 gap-y-10'>
            <Tooltip content="Python">
              <Image
                isZoomed
                alt="python"
                className="object-cover rounded-xl"
                src="/python.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="Tailwind CSS">
              <Image
                isZoomed
                alt="Tailwind"
                className="object-cover rounded-xl"
                src="/tailwindcss.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="React + NextJS">
              <Image
                isZoomed
                alt="react"
                className="object-cover rounded-xl"
                src="/reactnative.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="Django">
              <Image
                isZoomed
                alt="django"
                className="object-cover rounded-xl"
                src="/django.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="MySQL">
              <Image
                isZoomed
                alt="sql"
                className="object-cover rounded-xl"
                src="/mysql.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="Javascript">
              <Image
                isZoomed
                alt="js"
                className="object-cover rounded-xl"
                src="/javascript.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="GitHub">
              <Image
                isZoomed
                alt="github"
                className="object-cover rounded-xl"
                src="/github.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="CSS3">
              <Image
                isZoomed
                alt="css3"
                className="object-cover rounded-xl"
                src="/CSS3.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="HTML5">
              <Image
                isZoomed
                alt="html"
                className="object-cover rounded-xl"
                src="/HTML.png"
                width={100}
              />
            </Tooltip>
            <Tooltip content="Figma">
              <Image
                isZoomed
                alt="html"
                className="object-cover rounded-xl"
                src="/figma.png"
                width={100}
              />
            </Tooltip>
          </div>
        </div>
        <div id="my-work" className="min-h-screen flex grow w-9/12 self-center p-4 justify-center items-center mt-[-80px] pt-[80px]">
          <div className='flex flex-row flex-wrap items-center justify-around flex-1 gap-4 gap-y-10'>
            <Card
              isFooterBlurred
              radius="lg"
              className="w-3/12 border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Hotel-Booking</p>
                <small className="text-default-500">Group Full-Stack - NSS Hackathon</small>
              </CardHeader>
              <Image
                alt="Hotel Booking"
                className="object-cover"
                src="/hotel.jpg"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='This Full-Stack web application, developed with React Next.js and JavaScript on the client-side, and Python, Django, and SQL on the server-side, simplifies worldwide hotel booking. Offering detailed descriptions, travelers can easily find accommodations matching their preferences and budget. Seamlessly integrated into travel planning, it streamlines the entire booking process for leisure, business, family trips, solo adventures, or any other purpose. Key features include extensive detailed property descriptions, flexible booking options, and secure payment processing, ensuring a smooth and secure experience for users.' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="w-3/12 border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Beat-Bite-Bistro</p>
                <small className="text-default-500">Individual - Full Stack app</small>
              </CardHeader>
              <CardBody className="py-2 overflow-visible">
                <Image
                  alt="Pizza Order"
                  className="object-cover"
                  src="/pizza.jpeg"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='Beat Bite Bistro is a full-stack application utilizing React.js, Python with Django, HTML, CSS, and SQL, specifically designed as a Point of Sale (POS) system tailored for tablet devices. This innovative solution aims to streamline the order process for the bistro, enhancing customer experience and efficiency. With its user-friendly interface and robust backend functionalities, Beat Bite Bistro revolutionizes the way orders are managed, providing a seamless and enjoyable experience for both staff and customers alike.' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="w-3/12 border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Vocabulary</p>
                <small className="text-default-500">Individual - Front-end app</small>
              </CardHeader>
              <CardBody className="py-2 overflow-visible">
                <Image
                  alt="vocabulary"
                  className="object-cover"
                  src="/Vocabulary.jpg"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='Vocab-YOU-lary is a front-end application developed with React.js, HTML, JavaScript, and CSS, empowering users to create and manage vocabularies with ease. With options to set vocabularies as private or public, users can control access to their content. The app offers functionalities for creating, updating, and deleting vocabularies, as well as enabling users to create categories for better organization. With its intuitive interface and versatile features, Vocab-YOU-lary enhances the learning experience for users, providing a seamless platform for vocabulary management.' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="w-3/12 border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Tic-Tac-Toe</p>
                <small className="text-default-500">Individual - Front-end app</small>
              </CardHeader>
              <CardBody className="py-2 overflow-visible">
                <Image
                  alt="Tic-Tac-Toe"
                  className="object-cover"
                  src="/tictactoe.jpg"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='Tic-tac-toe is an exciting gaming application crafted with React.js, HTML, JavaScript, and CSS, offering users the classic game experience with a challenging twist. Users can enjoy matches against the computer, meticulously designed to provide a formidable opponent thats nearly unbeatable. With its intuitive interface and clever algorithms, the game ensures a thrilling challenge for players seeking to test their strategic skills. Give it a try and see if you can outsmart the computer in this timeless battle of wits!' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="w-3/12 border-none"
            >
              <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
                <p className="font-bold uppercase text-tiny">Sorting Hat</p>
                <small className="text-default-500">Individual - Front-end app</small>
              </CardHeader>
              <CardBody className="py-2 overflow-visible">
                <Image
                  alt="Sorting Hat"
                  className="object-cover"
                  src="/harry.jpg"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <DetailsForm modalBody='Sorting Hat is an engaging application crafted with React.js, HTML, JavaScript, and CSS, offering users the whimsical experience of adding new first-year students and randomly assigning them to houses. Users can immerse themselves in the enchanting world of Hogwarts by assigning students to Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Additionally, the application provides users with the option to expel students to Voldemorts Army for added fun and mischief. With its playful interface and interactive features, Sorting Hat brings the magic of the wizarding world to life, inviting users to embark on their own Hogwarts adventure.' loomLink='#' gitHubLink='#'>Details</DetailsForm>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;