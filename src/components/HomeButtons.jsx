import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Button = ({ to, state, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.05, rotate: 1 }} // subtle lift + tilt
        whileTap={{ scale: 0.95 }}
    >
        <NavLink
            to={to}
            state={state}
            className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold 
                 text-gray-900 bg-gray-200 shadow-md border border-gray-200
                 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-100 
                 active:scale-95 transition duration-200"
        >
            {children}
        </NavLink>
    </motion.div>
);

export default function HomeButtons() {
    return (
        <div className="absolute top-[520px] mt-12 md:mt-4 left-3 md:top-96 md:left-30 flex gap-2 md:gap-6">
            <Button to="/lobby" delay={0.1}>♟️ Lobby</Button>
            <Button to="/lobby" state={{ startComputerGame: true }} delay={0.3}>🤖 Play V/S Computer</Button>
            <Button to="/guide" delay={0.2}>📖 Guide</Button>

        </div>
    );
}
