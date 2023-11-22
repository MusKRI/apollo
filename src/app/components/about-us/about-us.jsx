// **** Library Imports ****
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

// **** Local Imports ****
// import SectionHeading from "../SectionHeading";

// import Img1 from "./images/1.jpeg";
// import Img2 from "./images/2.jpeg";
// import Img3 from "./images/3.jpeg";

import SectionButton from '../SectionButton';

const imageVariants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5
		}
	}
};

const textVariants = {
	hidden: {
		opacity: 0,
		x: 30
	},
	whileInView: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1
		}
	}
};

const HomeAboutUs = ({ data }) => {
	return (
		<section className="relative px-3 md:px-5">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row py-16 md:py-32">
				<div className="flex-1 flex flex-row gap-6">
					<div className="relative overflow-hidden rounded-lg min-h-full mt-[25px]">
						<motion.img
							variants={imageVariants}
							initial="hidden"
							whileInView="whileInView"
							src={data.about1Img}
							style={{ minHeight: '95%' }}
							alt="about-img1"
							className="w-96 object-cover rounded-lg"
						/>
					</div>
					<div className="flex flex-col gap-6 mt-[25px]">
						<div className="relative overflow-hidden rounded-lg w-full" style={{ height: '50%' }}>
							<motion.img
								style={{ height: '100%' }}
								variants={imageVariants}
								initial="hidden"
								whileInView="whileInView"
								src={data.about2Img}
								alt="about-img2"
								className="w-64 object-cover rounded-lg"
							/>
						</div>

						<div className="relative overflow-hidden rounded-lg w-full" style={{ height: '50%' }}>
							<motion.img
								variants={imageVariants}
								initial="hidden"
								style={{ height: '100%' }}
								whileInView="whileInView"
								src={data.about3Img}
								alt="about-img3"
								className="w-[248px] object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
				<motion.div initial="hidden" whileInView="whileInView" className="flex-1 px-6 flex flex-col gap-3 mt-[20px]">
					<motion.h1 variants={textVariants} className="text-[28px] md:text-5xl font-medium text-main-text">
						{data.aboutMainHeading ?? 'Discover Our Legacy'}
					</motion.h1>

					<motion.p variants={textVariants} className="text-body-text">
						{data.aboutMainDescription}
					</motion.p>

					{/* Tabs Content */}
					<motion.div variants={textVariants} className="mb-5">
						<Tabs.Root className="flex flex-col" defaultValue="tab1">
							<Tabs.List className="shrink-0 flex border-b mb-5" aria-label="Purpose and Values">
								<Tabs.Trigger
									className="bg-white pr-5 h-[45px] flex items-center justify-center text-[22px] font-medium leading-none select-none outline-none cursor-pointer data-[state=active]:text-green data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
									value="tab1"
								>
									{data.aboutSubHeading1}
								</Tabs.Trigger>

								<Tabs.Trigger
									className="bg-white px-5 h-[45px] flex items-center justify-center text-[22px] font-medium leading-none select-none outline-none cursor-pointer data-[state=active]:text-green data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]"
									value="tab2"
								>
									{data.aboutSubHeading2}
								</Tabs.Trigger>
							</Tabs.List>

							<Tabs.Content className="grow bg-white outline-none" value="tab1">
								<motion.p
									initial={{
										opacity: 0,
										y: 20
									}}
									whileInView={{
										opacity: 1,
										y: 0
									}}
									className="text-body-text"
								>
									{data.aboutSubHeading1Description}
								</motion.p>
							</Tabs.Content>

							<Tabs.Content className="grow bg-white outline-none" value="tab2">
								<motion.p
									initial={{
										opacity: 0,
										y: 20
									}}
									whileInView={{
										opacity: 1,
										y: 0
									}}
									className="text-body-text"
								>
									{data.aboutSubHeading2Description}
								</motion.p>
							</Tabs.Content>
						</Tabs.Root>
					</motion.div>

					<motion.div variants={textVariants} className="flex items-center justify-start">
						<SectionButton slug="/purpose-values">Read more</SectionButton>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default HomeAboutUs;
