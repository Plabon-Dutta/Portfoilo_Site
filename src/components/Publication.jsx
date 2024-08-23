import {PUBLICATIONS } from "../constants";

import { animate, motion } from "framer-motion";

const Publication = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Publications</h2>
        <div>
            {PUBLICATIONS.map((publication, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-fll lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{publication.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-4 font-bold text-purple-100">Title: {publication.description}</h6>
                        <h6 className="mb-2 font-semibold"><span className="text-sm text-neutral-400">Journal: {publication.journal}</span> <br /> <span className="text-sm text-neutral-400">Scopus Index: {publication.scopus_index}</span> <br /> <span className="text-sm text-neutral-400">Impact Factor: {publication.impact_factor}</span></h6>
                        <h6 className="mb-2 font-semibold"><span className="text-sm text-neutral-400">Paper Link: <a href={publication.link}><u>{publication.link}</u></a></span></h6>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Publication;