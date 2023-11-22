import { motion } from 'framer-motion';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import SelectItem from './select-item';

import './contact-form-section.css';

import addressImg from '../../images/address.png';
import emailImg from '../../images/email.png';
import phoneImg from '../../images/phone.png';
import { BsArrowRight } from 'react-icons/bs';

const ContactFormSection = () => {
	const buttonVariants = {
		rest: {
			right: '-2rem'
		},
		whileHover: {
			left: '-0.5rem'
		}
	};

	const iconVariants = {
		rest: {
			x: 0
		},
		whileHover: {
			x: 50
		}
	};

	const MotionArrowRight = motion(BsArrowRight);

	return (
		<section className="relative py-16 md:py-32">
			<div className="flex flex-col lg:flex-row items-stretch lg:items-center">
				<div className="flex-1 flex flex-col items-center gap-8">
					<div className="flex flex-row items-center gap-8">
						<div className="relative">
							<img src={addressImg} alt="Address" className="max-w-full object-cover" />
						</div>

						<div className="flex flex-col">
							<p className="text-[#002840] font-semibold">Apollo Green Engery Limited</p>
							<p className="text-[#002840]">
								Apollo Towers, Plot No 20, Sector 44,
								<br />
								Gurgaon-122002
								<br />
								Haryana, India
							</p>
						</div>
					</div>

					<div className="flex flex-row items-center gap-8">
						<div className="relative" style={{ marginLeft: '-100px' }}>
							<img src={phoneImg} alt="Phone" className="max-w-full object-cover" />
						</div>

						<div className="flex flex-col">
							<p className="text-[#002840] h-10 space-x-3 flex">
								<span className="self-center">(91-124) 6740100</span>
							</p>
							<p className="text-[#002840] h-10 space-x-3 flex">
								<span className="self-center">(91-124) 6740200</span>
							</p>
						</div>
					</div>

					<div className="flex flex-row items-center gap-8">
						<div className="relative" style={{ marginLeft: '-100px' }}>
							<img src={emailImg} alt="Phone" className="max-w-full object-cover" />
						</div>

						<div className="flex flex-col">
							<p className="text-[#002840]">
								info@apolloindia.com
								<br />
								contact@apolloindia.com
							</p>
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col items-center">
					<p className="text-[#002840] font-medium text-lg mt-10 md:mt-0">
						Fields marked with an <span className="text-red-600">*</span> are required
					</p>

					<div className="mt-4 flex flex-col gap-4 self-stretch">
						<div className="form__group field">
							{/* <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
              />
              <label htmlFor="name" className="form__label">
                I&apos;m interested in*
              </label> */}
							<Select.Root>
								<Select.Trigger
									className="border w-full flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
									aria-label="Food"
								>
									<Select.Value placeholder="Select a Business" />
									<Select.Icon className="text-violet11">
										<div className="d-flex justify-content-end" style={{ width: '32vw' }}>
											<ChevronDownIcon />
										</div>
									</Select.Icon>
								</Select.Trigger>
								<Select.Portal>
									<Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
										<Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
											<ChevronUpIcon />
										</Select.ScrollUpButton>
										<Select.Viewport className="p-[5px]">
											<Select.Group>
												<SelectItem value="supply chain">Supply Chain</SelectItem>
												<SelectItem value="fashion">Fashion Page</SelectItem>
												<SelectItem value="marketplace">Market Place</SelectItem>
												<SelectItem value="prox">ProX</SelectItem>
											</Select.Group>
										</Select.Viewport>
									</Select.Content>
								</Select.Portal>
							</Select.Root>
						</div>

						<div className="form__group field">
							<input type="input" className="form__field" placeholder="Name" required="" />
							<label htmlFor="name" className="form__label">
								Name*
							</label>
						</div>

						<div className="form__group field">
							<input type="input" className="form__field" placeholder="Name" required="" />
							<label htmlFor="name" className="form__label">
								Organisation*
							</label>
						</div>

						<div className="form__group field">
							<input type="input" className="form__field" placeholder="Name" required="" />
							<label htmlFor="name" className="form__label">
								Email Address*
							</label>
						</div>

						<div className="form__group field">
							<input type="input" className="form__field" placeholder="Name" required="" />
							<label htmlFor="name" className="form__label">
								Contact no*
							</label>
						</div>

						<div className="form__group field">
							<textarea rows={3} className="form__field" placeholder="Name" required="" />
							<label htmlFor="name" className="form__label">
								Your query
							</label>
						</div>

						<div className="flex max-w-xl justify-end">
							<motion.button
								className="relative flex items-center text-[#002840]"
								to={'#'}
								initial="rest"
								whileHover="whileHover"
							>
								<span className="font-medium text-lg text-[#002840]">Submit</span>
								<motion.div
									variants={buttonVariants}
									layout
									className="border border-[#002840] absolute p-3 rounded-full flex justify-end "
								>
									<MotionArrowRight className="w-4 h-4 self-end" variants={iconVariants} />
								</motion.div>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
