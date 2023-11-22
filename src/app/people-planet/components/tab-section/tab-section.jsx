import * as Tabs from '@radix-ui/react-tabs';
import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';

const TabSection = ({ data }) => {
	const [tabValue, setTabValue] = useState(data?.[0]?.id);

	return (
		<div className="relative bg-[#171717] px-10 py-4 lg:py-0 text-white">
			<Tabs.Root className="flex flex-col lg:flex-row gap-5 justify-center" defaultValue={tabValue} value={tabValue}>
				<Tabs.List className="flex-[0.2]">
					<div className="flex flex-row lg:!flex-col justify-center items-center gap-8 h-full py-4">
						{data?.map(tab => {
							return (
								<Tabs.Trigger
									key={tab.id}
									value={tab.id}
									className="text-xl lg:text-3xl font-medium"
									onClick={() => setTabValue(tab.id)}
								>
									{tab.name}
									{tabValue === tab.id && (
										<motion.div
											className="bg-white py-[1px] w-full"
											layout
											initial={{
												width: 0,
												opacity: 0
											}}
											animate={{
												width: '100%',
												opacity: 1
											}}
										/>
									)}
								</Tabs.Trigger>
							);
						})}
					</div>
				</Tabs.List>
				<div className="flex flex-row flex-1">
					<div className="flex-1">
						{data.map(tab => {
							return (
								<Tabs.Content value={tab.id} className="relative" key={tab.id}>
									<motion.img
										className="aspect-auto"
										style={{ borderRadius: '60px', padding: '20px 0px', maxHeight: '20%' }}
										src={tab.image}
										alt="Tab Image"
										initial={{
											x: -20,
											opacity: 0
										}}
										animate={{
											x: 0,
											opacity: 1,
											transition: {
												duration: 1
											}
										}}
									/>
								</Tabs.Content>
							);
						})}
					</div>
					<div className="flex-1 flex flex-col justify-center px-8">
						{data.map(tab => {
							return (
								<Tabs.Content value={tab.id} className="relative" key={tab.id}>
									<AnimatePresence>
										{tabValue === tab.id && (
											<motion.div
												className="flex flex-col gap-3"
												key={tab.id}
												initial={{
													x: 50,
													opacity: 0
												}}
												animate={{
													x: 0,
													opacity: 1,
													transition: {
														duration: 1
													}
												}}
												exit={{
													x: -20,
													opacity: 0
												}}
											>
												<h1 className="text-3xl lg:text-5xl capitalize">{tab.name}</h1>
												<p className="text-[#969696] text-sm lg:text-lg">{tab.subheading1}</p>
												<p className="text-[#969696] text-sm lg:text-lg">{tab.subheading2}</p>
												<p className="text-[#969696] text-sm lg:text-lg">{tab.subheading3}</p>
											</motion.div>
										)}
									</AnimatePresence>
								</Tabs.Content>
							);
						})}
					</div>
				</div>
			</Tabs.Root>
		</div>
	);
};

export default TabSection;
