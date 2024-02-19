import { TypeAnimation } from "react-type-animation";
const AnimatedTypingComponent = () => (
	<>
		<TypeAnimation
			cursor={true}
			sequence={[
				"",
				500,

				"Web Designer",
				2000,
				"Web Developer",
				2000,
				"Front End Developer",
				2000,
				"Software Developer",
				2000,
			]}
			wrapper="h2"
			repeat={6}
		/>
	</>
);

export default AnimatedTypingComponent;
