'use client';

import { motion } from 'framer-motion';

export default function ImplementationProgress() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4"
    >
      <h3 className="text-xl font-semibold mb-4">Implementation Progress</h3>
      <div>
        <p>Africa's digital transformation is gaining momentum, but progress is uneven across the continent [1, 2]. Key achievements and ongoing challenges include:</p>

        <h4 className="text-lg font-semibold mt-2">Key Achievements:</h4>
        <ul>
          <li>
            <strong>Increased Mobile Connectivity:</strong> Mobile phone availability is increasing and becoming more affordable [1]. Internet penetration in Africa is estimated at 36%, with an expected additional 300 million people coming online by 2025 [3].
          </li>
          <li>
            <strong>Mobile Money Success:</strong> Kenya's mobile money revolution continues to drive financial inclusion [4]. Of the more than 395.7 million registered mobile money accounts in Africa, greater than 145.8 million are active [see previous conversation].
          </li>
          <li>
           <strong>Emerging Tech Hubs:</strong> Africa has over 400 technology hubs in 93 cities across 42 countries [5]. Startups on the continent are receiving bigger funding rounds; in 2018, African startups raised a record $1.1 billion [5].
          </li>
          <li>
            <strong>Digital Identity Initiatives:</strong> There is a push towards providing digital legal identities, with the goal of 99.9% coverage by 2030 [6].
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-2">Key Challenges:</h4>
        <ul>
          <li>
            <strong>Digital Divide:</strong>  There remains a significant digital divide. Many communities lack access to ICTs [7, 8]. The digital innovation divide entails that not all ecosystems are equal, either in terms of the inputs of talent, investment and resources, or in terms of their technological, social or financial output [7].
          </li>
          <li>
            <strong>Slow Digital Terrestrial Broadcasting Migration:</strong> Despite commitments, only 30% of AU Member States have completed the migration to digital terrestrial broadcasting [9].
          </li>
          <li>
            <strong>Policy and Regulation Gaps:</strong> Weaknesses exist in policy and regulatory environments, hindering investment and innovation [1, 10].
          </li>
          <li>
            <strong>Coordination Issues:</strong> Weak coordination among continental institutions pursuing the digitalization agenda needs immediate attention [1].
          </li>
          </ul>

          <p> To accelerate progress, the Digital Transformation Strategy for Africa emphasizes political commitment, private sector engagement, policy alignment, and massive investment in foundational pillars and critical sectors [2, 10]. Regional integration, harmonization of initiatives, and capacity development are also crucial success factors [10, 11].</p>
      </div>
    </motion.div>
  );
}