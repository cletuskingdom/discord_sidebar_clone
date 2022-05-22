import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function Home() {
	const SideBarIcon = ({ icon, text = "tooltip" }) => (
		<div className="sidebar-icon group">
			{icon}

			<span className="sidebar-tooltip group-hover:scale-100">
				{text}
			</span>
		</div>
	);

	return (
		<div>
			<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
				<SideBarIcon icon={<FaFire size="28" />} text="Dashboard" />
				<SideBarIcon icon={<BsPlus size="32" />} text="Upload" />
				<SideBarIcon
					icon={<BsFillLightningFill size="20" />}
					text="About Us"
				/>
				<SideBarIcon icon={<FaPoo size="20" />} text="Apply now!" />
			</div>

			<div className="container mx-auto py-10 pl-24 pr-10 md:pl-24 md:pr-10">
				<h1 className="pb-8 lg:text-5xl text-3xl">
					Welcome to DISCORD Sidebar Clone
				</h1>
				<p className="mb-5">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Donec quam felis, ultricies nec, pellentesque
					eu, pretium quis, sem. Nulla consequat massa quis enim.
					Donec pede justo, fringilla vel, aliquet nec, vulputate
					eget, arcu.
				</p>

				<p className="mb-5">
					In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
					justo. Nullam dictum felis eu pede mollis pretium. Integer
					tincidunt. Cras dapibus. Vivamus elementum semper nisi.
					Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
					lorem ante, dapibus in, viverra quis, feugiat a, tellus.
				</p>

				<p className="mb-5">
					Phasellus viverra nulla ut metus varius laoreet. Quisque
					rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
					Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
					rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
					sem quam semper libero, sit amet adipiscing sem neque sed
					ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
					hendrerit id, lorem. Maecenas nec odio et ante tincidunt
					tempus. Donec vitae sapien ut libero venenatis faucibus.
					Nullam quis ante. Etiam sit amet orci eget eros faucibus
					tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
					Donec sodales sagittis magna. Sed consequat, leo eget
					bibendum sodales, augue velit cursus nunc,
				</p>
			</div>
		</div>
	);
}
